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
import { ChatContent } from './components/ChatContent/ChatContent';
import { IChatList } from './components/Chat/interfaces';
import { inputAndLabel } from '../../components/inputAndLabel';
import ChatController from '../../controllers/ChatController';
import { CHAT_NAME_REGEXP } from '../../utils/regularExpressions';
import { chat } from './components/Chat';
import Handlebars from 'handlebars';
import addChatSvg from '../../styles/icons/chat.svg';
import profileSvg from '../../styles/icons/settings.svg';
import closeModalBtnSvg from '../../styles/icons/closeModalBtn.svg';
import { Actions } from '../../Store';
import { IChatProps } from './components/Chat/interfaces';
import { Stub } from './components/Stub/Stub';
import env from '../../utils/env';

const addChatBtnProps: IBtnProps =
{
    msg: 'Новый чат',
    className: styles.addChat__btn,
    clickHandler: () => {
        ChatController.request().then(() => {
            const modal = document.querySelector(`.${styles.modal}`);
            modal?.classList.add(`${styles.modal_active}`);
        }
        )

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

const modalInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'chatName',
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
    e.stopPropagation();
    const { chatName } = e.target as HTMLFormElement;
    if (!chatName) {
        return;
    };

    const data = {
        title: chatName.value,
    };

    chatName.value = '';
    ChatController.createChat(data);

    closeModal();
};

const chatListProps = Actions.getChatListState() as IChatProps[];

const getChatContent = () => {

    const chats = Actions.getChatListState();
    const { id } = Actions.getActiveChatState();

    if (!id && chats.length > 0) {
        return new Stub('Выберите чат');
    } else if (chats.length < 1) {
        return new Stub('Создайте новый чат');

    } else {
        return new ChatContent(Actions.getActiveChatState());
    }
}

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
                chatList: chatListProps.map(item => chat(item)),
                anchorToProfile: anchorToProfile,
                chatContent: getChatContent(),
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



    public setProps(newProps: TProps) {

        if (!newProps) {
            return;
        };

        const { children, props } = this.getChildren(newProps);

        if (Object.values(children).length) {
            Object.assign(this._children, children);
        };

        if (Object.values(props).length) {
            Object.assign(this._props, props);
        };
    };

    public updatePropsForChilds(newProps: TProps) {

        if (!newProps) {
            return;
        };
        console.log(newProps);

        const { chatList, activeChat } = newProps;

        const updateActiveChatAvatarFromChatList = (id: number, avatar: string) => {/* для обновление аватара в списке чатов в случае */
            this._props['chatList'].forEach(child => {
                if (child['_props']['attr']['id'] === id) {
                    child['_children']['avatar']['_props']['src'] = avatar ? `${env.HOST_RESOURCES}${avatar}` : 'https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg';
                };
            });
        };

        if (chatList) { /* устанавливаем пропсы для для мессенджера, удаляем лишний чат или добавляем  */
            const state = Actions.getChatListState() as IChatList[];
            const childs = this._props['chatList'];
            if (childs.length !== state.length) {/* меняем список чатов только в случае добавления или удаления чата */
                const chatListProps = Actions.getChatListState() as IChatProps[];
                this._props['chatList'] = chatListProps.map(item => chat(item));
            };
        };

        if (activeChat) { /* устанавливаем пропсы для для мессенджера, обновляем текущий чат  */
            const chats = Actions.getChatListState();
            const { id, avatar } = Actions.getActiveChatState();

            updateActiveChatAvatarFromChatList(id, avatar);

            if (!id && chats.length > 0) {
                this._children['chatContent'] = new Stub('Выберите чат');
            } else if (chats.length < 1) {
                this._children['chatContent'] = new Stub('Создайте новый чат');
            } else {
                this._children['chatContent'] = new ChatContent(Actions.getActiveChatState());
            }
        };
    };

}
