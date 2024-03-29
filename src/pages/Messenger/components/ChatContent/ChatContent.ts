import { Component, TProps } from '../../../../services/Component';
import Handlebars from 'handlebars';
import { tpl } from './tpl';
import styles from './styles.module.sass';
import { v4 as makeUUID } from 'uuid'
import { InputAndLabel } from '../../../../components/inputAndLabel/InputAndLabel';
import { InputAndLabelProps } from '../../../../components/inputAndLabel/interfaces';
import { UserList } from './components/userList/UserList';
import { IActiveChatUsers } from './interfaces';
import { Avatar } from '../../../../components/avatar/Avatar';
import { Btn } from '../../../../components/btn/Btn';
import { Input } from '../../../../components/input/Input';
import { Message } from './components/message/Message';
import { router } from '../../../../utils/router';
import UserProfileController from '../../../../controllers/UserProfileController';
import ChatController from '../../../../controllers/ChatController';
import addUserBtnSvg from '../../../../styles/icons/addUserBtn.svg';
import deleteSvg from '../../../../styles/icons/delete.svg';
import { CHAT_NAME_REGEXP } from '../../../../utils/regularExpressions';
import closeModalBtnSvg from '../../../../styles/icons/closeModalBtn.svg';
import { IBtnProps } from '../../../../components/btn/interfaces';
import { IFindUserRequest } from './interfaces';
import { Actions } from '../../../../Store';
import { env } from '../../../../utils/env';
import { showChatUsers } from './components/userList/UserList';
import MessageController from '../../../../controllers/MessageController';


const tools = () => document.querySelector(`.${styles.userTools__list}`) as HTMLElement;
const btn = () => document.querySelector(`.${styles.header__userToolsBtn}`) as HTMLButtonElement;


const setToolsNotActive = (tools: HTMLElement, btn?: HTMLButtonElement) => {
    tools?.classList.add(styles.userTools__list_hidden);
    btn?.classList.remove(styles.header__userToolsBtn_active);
};

const setToolsActive = (tools: HTMLElement, btn: HTMLButtonElement) => {
    tools?.classList.remove(styles.userTools__list_hidden);
    btn?.classList.add(styles.header__userToolsBtn_active);
};

const toggleToolsState = () => {
    tools()?.classList.contains(styles.userTools__list_hidden) ?
        setToolsActive(tools(), btn()) : setToolsNotActive(tools(), btn());
};

const changeAvatar = (e: Event) => {
    e.preventDefault()
    const input = e.target as HTMLInputElement;
    const avatar = input.files?.item(0);
    const chatId = Actions.getActiveChatState().id;

    if (!avatar || !chatId) {
        return;
    };

    const formData = new FormData();
    formData.append('avatar', avatar);
    formData.append('chatId', JSON.parse(chatId));
    ChatController.updateAvatar(formData);
};

const avatarUploadProps: InputAndLabelProps =
{
    id: makeUUID() as string,
    name: 'avatarUpload',
    type: 'file',
    placeholder: 'Изменить',
    disabled: false,
    value: '',
    accept: ".jpg, .jpeg, .png",
    multiple: false,
    containerClass: styles.avatar,
    inputClassName: styles.avatar__uploadInput,
    labelClassName: styles.avatar__uploadIabel,
    changeHandler: changeAvatar
};

const avatarUpload = new InputAndLabel(avatarUploadProps);

const toolsBtn = new Btn(
    {
        msg: '',
        className: styles.header__userToolsBtn,
        clickHandler: () => toggleToolsState()
    }
);

const addUserBtn = new Btn(
    {
        msg: 'Добавить пользователя',
        className: styles.item__btn,
        child: `<img class=${styles.list__img} src=${addUserBtnSvg} >`,
        clickHandler: () => {
            const modal = document.querySelector(`.${styles.modal}`);
            modal?.classList.add(`${styles.modal_active}`);
        }
    }
);

const deleteChatBtn = new Btn(
    {
        msg: 'Удалить чат',
        className: styles.item__btn,
        clickHandler: () => {
            ChatController.removeChat();
            setToolsNotActive(tools(), btn())
        },
        child: `<img class=${styles.list__img} src=${deleteSvg} >`
    }
);

const getMsgText = () => {
    const input = document.querySelector(`.${styles.newMsg__inputMsg}`) as HTMLInputElement;
    const msg = input.value;
    input.value = '';
    return msg;
};

const sendMessage = () => {
    const text = getMsgText();
    if (text.length < 1) {
        return;
    }
    return MessageController.sendMessage(text);
}

const sendMsgBtn = new Btn(
    {
        msg: '',
        className: styles.newMsg__sendMsgBtn,
        clickHandler: () => {
            sendMessage();
        }
    }
);

const inputMsg = new Input(
    {
        id: 'inputMsg',
        name: 'inputMsg',
        type: 'text',
        disabled: false,
        value: '',
        placeholder: 'Сообщение',
        className: styles.newMsg__inputMsg,
        keyupHandler: (e: KeyboardEvent) => {
            if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                sendMessage();
            };
        }
    }
);

const modalInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'userLogin',
    type: 'text',
    placeholder: 'Логин',
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
    msg: 'Добавить',
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

const submitHandlerToChatContent = (e: Event) => {
    e.preventDefault();
    e.stopPropagation()
    const { userLogin } = e.target as HTMLFormElement;
    const data: IFindUserRequest = {
        login: userLogin.value,
    };

    userLogin.value = '';
    UserProfileController.findUserRequest(data);
    closeModal();
    toggleToolsState();

};

const messages = Actions.getChatMessages();

export class ChatContent extends Component {
    constructor(
        {
            id,
            title,
            avatar,
            users
        }: IActiveChatUsers
    ) {
        super(
            'main',
            {
                attr: {
                    class: styles.chatContent,
                    id: id
                },
                chatAvatar: new Avatar({
                    alt: `${title}-avatar`,
                    src: avatar ? `${env.HOST_RESOURCES}${avatar}` : 'https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg',
                    figureClassName: styles.chatData__figure,
                    imgClassName: styles.figure__img,
                    clickHandler: () => router.go('/user')
                }),
                avatarUpload: avatarUpload,
                toolsBtn: toolsBtn,
                chatName: title,
                showMembersBtn: new Btn(
                    {
                        msg: `${users.length} участников`,
                        clickHandler: () => {
                            showChatUsers();
                        },
                    }
                ),
                addUserBtn: addUserBtn,
                deleteChatBtn: deleteChatBtn,
                usersList: new UserList(
                    {
                        users: users,
                    }),
                messages: messages.length < 1 ? messages.map(msg => new Message(msg)) : null,
                inputMsg: inputMsg,
                sendMsgBtn: sendMsgBtn,
                modalInput: new InputAndLabel(modalInputProps),
                closeModalBtn: new Btn(closeModalBtnProps),
                submitModalBtn: new Btn(submitModalBtnProps),
                events: {
                    "submit": submitHandlerToChatContent
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

                propsAndStubs[key] = `<div class=${styles.chatContent_mesages} data-id="${propsAndStubs.__id}"></div>`;

                Object.entries(list).forEach(([, child]) => {
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
            if (fragment instanceof window.HTMLTemplateElement) {
                const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);

                if (stub)
                    stub.replaceWith(child.getContent());
            };
        });

        Object.entries(propsAndStubs).forEach(([key,]) => {
            if (containerId.includes(propsAndStubs[key])) {
                if (fragment instanceof window.HTMLTemplateElement) {
                    const stub = fragment.content.querySelector(`[data-id="${propsAndStubs[key]}"]`);
                    if (stub) {
                        childs.forEach(child => stub.appendChild(child));
                    };
                };
            };
        });

        if (fragment instanceof window.HTMLTemplateElement)
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

}

