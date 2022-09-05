import { v4 as makeUUID } from 'uuid';
import { Component, TProps } from '../../services/Component';
import { tpl } from './tpl';
import { Avatar } from '../../components/avatar/Avatar';
import { Btn } from '../../components/btn/Btn';
import { IBtnProps } from '../../components/btn/interfaces';
import { IAvatarProps } from '../../components/avatar/interfaces';
import { Input } from '../../components/input/Input';
import { IInputProps } from '../../components/input/interfaces';
import { InputAndLabelProps } from '../../components/inputAndLabel/interfaces';
import * as styles from './styles.module.sass';
import { router } from '../../utils/router';
import { itemChat } from './components/ChatContent';
import { IItemChat } from './components/ChatContent/interfaces';
import { inputAndLabel } from '../../components/inputAndLabel';
import ChatController from '../../controllers/ChatController';
import { CHAT_NAME_REGEXP } from '../../utils/regularExpressions';
import { chat } from './components/Chat';
import Handlebars from 'handlebars';
import { getChats } from '../../utils/getChats';
import addChatSvg from '../../styles/icons/chat.svg';
import profileSvg from '../../styles/icons/settings.svg';
import closeModalBtnSvg from '../../styles/icons/closeModalBtn.svg';
import env from '../../utils/env';


const getActiveChatData = () => {
    const activeChat = localStorage.getItem('activeChat');

    if (!getChats || !activeChat) {
        return;
    };

    const allchats = getChats()
        ?.filter(chat => `${chat.id}` === JSON.parse(activeChat));

    if (!allchats) {
        return;
    }
    return allchats[0];
};

const addChatBtnProps: IBtnProps =
{
    msg: 'Новый чат',
    className: styles.addChat__btn,
    clickHandler: () => {
        ChatController.request()
        const modal = document.querySelector(`.${styles.modal}`);
        modal?.classList.add(`${styles.modal_active}`);
    },
    child: `<img src=${addChatSvg} class=${styles.btn__img}>`
};


const avatarProps: IAvatarProps =
{
    alt: 'автар',
    src: `https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg`,
    figureClassName: styles.figure,
    imgClassName: styles.figure__img
};

const avatar = new Avatar(avatarProps);

const anchorToProfile = new Btn(
    {
        msg: 'Профиль',
        className: styles.goToProfileBtn,
        clickHandler: (e: Event) => {
            e.preventDefault();
            router.go('/user')
        },
        child: `<img src=${profileSvg} class=${styles.goToProfileBtn__img}>`
    }
);

const searchInputProps: IInputProps =
{
    id: 'searchInput',
    name: 'searchInput',
    type: 'message',
    disabled: false,
    value: '',
    placeholder: 'Поиск',
    className: styles.chatSearch__input
};

const searchInput = new Input(searchInputProps);

const setActiveChat = async (e: Event) => {
    const prevActivChatId = localStorage.getItem('activeChat');
    console.log('prevActivChatId', prevActivChatId)
    const activeChat = e.currentTarget as HTMLDivElement;
    console.log(activeChat)
    if (!prevActivChatId) {
        return;
    };

    const prevActivChat = document.getElementById(`${JSON.parse(prevActivChatId)}`) as HTMLDivElement;
    if (!prevActivChat) {
        return;
    };

    prevActivChat.style.background = 'none';
    activeChat.style.background = '#E4EDFD';


    localStorage.setItem('activeChat', JSON.stringify(activeChat.id));
    await ChatController.requestChatUsers(activeChat.id)

    // location.reload();
}

const chatList = getChats()
    ?.map(props => chat({ ...props, ... { setActiveChat: setActiveChat } }));


const modalInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'modalInput',
    type: 'text',
    placeholder: 'Название',
    disabled: false,
    value: '',
    title: 'от 1 до 20 символов, поле не должно быть пустым',
    pattern: `${CHAT_NAME_REGEXP}`,
    required: true,
    inputClassName: styles.box__input,
    labelClassName: styles.box__label,

};

const submitModalBtnProps: IBtnProps =
{
    btnType: 'submit',
    msg: 'Создать',
    className: styles.box__btn
};

const closeModal = () => {
    const modal = document.querySelector(`.${styles.modal}`);
    modal?.classList.remove(`${styles.modal_active}`)
};

const closeModalBtnProps: IBtnProps =
{
    btnType: 'reset',
    msg: '',
    className: styles.modal__closeBtn,
    clickHandler: (e: Event) => {
        e.preventDefault();
        closeModal();
    },
    child: `<img src=${closeModalBtnSvg} class=${styles.closeBtn__img}>`
};




const submitHandler = (e: Event) => {
    e.preventDefault();
    const { modalInput } = e.target as HTMLFormElement;
    const data = {
        title: modalInput.value,
    };

    const response = ChatController.createChat(data);
    response.then(res => console.log(res));
    closeModal();
};

const deleteUser = (chatId: string, userId: string) => {

    console.log('deleted', chatId, userId)
}



const itemChatProps: IItemChat =
{
    chatID: `${getActiveChatData()?.id}` ?? '',
    chatName: getActiveChatData()?.title ?? '',
    chatAvatar: getActiveChatData()?.avatar ? `${env.HOST_RESOURCES}${getActiveChatData()?.avatar}` : "https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg",
    deleteUser: deleteUser
};

export class Messenger extends Component {
    constructor() {
        super(
            'article',
            {
                attr: {
                    class: styles.messenger
                },
                avatar: avatar,
                addChatBtn: new Btn(addChatBtnProps),
                searchInput: searchInput,
                chatList: chatList,
                anchorToProfile: anchorToProfile,
                itemChat: itemChat(itemChatProps),
                modalInput: inputAndLabel(modalInputProps),
                closeModalBtn: new Btn(closeModalBtnProps),
                submitModalBtn: new Btn(submitModalBtnProps),
                events: {
                    "submit": submitHandler,
                }
            }
        )
    }
    render() {
        return this.compile(tpl);
    }

    compile(template: string, props?: TProps) {
        if (typeof (props) === 'undefined')
            props = this._props;

        const propsAndStubs = { ...props };

        const fragment: HTMLElement = this.createDocumentElement('template');

        const childs: HTMLElement[] = [];
        let containerId: TProps = [];

        Object.entries(propsAndStubs).forEach(([key, list]) => {
            if (Array.isArray(propsAndStubs[key])) {
                containerId.push(propsAndStubs.__id)

                propsAndStubs[key] = `<div class=${styles.sidebar__chatList} data-id="${propsAndStubs.__id}"></div>`;

                Object.entries(list).forEach(([i, child]) => {
                    //является ли child "сложным"
                    if (child instanceof Component)
                        childs.push(child.getContent());
                });

            };
        });

        Object.entries(this._children).forEach(([key, child]) => {
            propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
        });

        fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

        Object.values(this._children).forEach(child => {
            if (fragment instanceof HTMLTemplateElement) {
                const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);

                if (stub)
                    stub.replaceWith(child.getContent());
            };
        });

        Object.entries(propsAndStubs).forEach(([key, child]) => {
            if (containerId.includes(propsAndStubs[key])) {
                if (fragment instanceof HTMLTemplateElement) {
                    const stub = fragment.content.querySelector(`[data-id="${propsAndStubs[key]}"]`);
                    if (stub) {
                        childs.forEach(child => stub.appendChild(child));
                    };
                };
            };
        });

        if (fragment instanceof HTMLTemplateElement)
            return fragment.content;
    };
}
