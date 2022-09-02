import { v4 as makeUUID } from 'uuid';
import { Component, TProps } from '../../services/Component';
import { tpl } from './tpl';
import { Avatar } from '../../components/avatar/Avatar';
import { Btn } from '../../components/btn/Btn';
import { IBtnProps } from '../../components/btn/interfaces';
import { IAvatarProps } from '../../components/avatar/interfaces';
import { Anchor } from '../../components/anchor/Anchor';
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
import env from '../../utils/env';


const getActiveChatData =()=>{
    const activeChat = localStorage.getItem('activeChat');

    if(!getChats || !activeChat){
        return;
    };

    const allchats=getChats()
    ?.filter(chat=>`${chat.id}`===JSON.parse(activeChat));

    if(!allchats ){
        return;
    }
    console.log(allchats[0])
         return allchats[0];

};

const addChatBtnProps: IBtnProps =
{
    msg: '',
    className: styles.addChat__btn,
    clickHandler: () => {
        ChatController.request()
        const modal = document.querySelector(`.${styles.modal}`);
        modal?.classList.add(`${styles.modal_active}`);
    }
};


const avatarProps: IAvatarProps =
{
    alt: 'автар',
    src: `https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg`,
    figureClassName: styles.figure,
    imgClassName: styles.figure__img
};

const avatar = new Avatar(avatarProps);

const anchorToProfile = new Anchor(
    {
        anchorPath: '/user',
        msg: 'Профиль',
        className: styles.goToProfile__anchor,
        clickHandler: (e: Event) => {
            e.preventDefault();
            router.go('/user')
        }
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

const chatList = getChats()
    ?.map(props => chat(props));


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
    }
};



const itemChatProps: IItemChat =
{
    chatID: `${getActiveChatData()?.id}`??'',
    chatName: getActiveChatData()?.title??'',
    chatAvatar: getActiveChatData()?.avatar ?`${env.HOST_RESOURCES}${getActiveChatData()?.avatar}`: "https://images.unsplash.com/photo-1506891536236-3e07892564b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
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
