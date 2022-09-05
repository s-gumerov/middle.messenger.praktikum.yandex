import { v4 as makeUUID } from 'uuid'
import { inputAndLabel as inputAndLabelComponent } from '../../../../components/inputAndLabel';
import { InputAndLabelProps } from '../../../../components/inputAndLabel/interfaces';
import { ChatContent } from './ChatContent';
import { UserList } from './components/userList/UserList';
import { IItemChat } from './interfaces';
import { Avatar } from '../../../../components/avatar/Avatar';
import { IAvatarProps } from '../../../../components/avatar/interfaces';
import { Btn } from '../../../../components/btn/Btn';
import { Input } from '../../../../components/input/Input';
import { Message } from './components/message/Message';
import * as styles from './styles.module.sass';
import { router } from '../../../../utils/router';
import { IInputProps } from '../../../../components/input/interfaces';
import ChatController from '../../../../controllers/ChatController';
import addUserBtnSvg from '../../../../styles/icons/addUserBtn.svg';
import deleteUserBtnSvf from '../../../../styles/icons/deleteUserBtn.svg';
import deleteSvg from '../../../../styles/icons/delete.svg';
import { getActiveChatUsers } from '../../../../utils/getActiveChatUsers';

export const itemChat = ({ chatName, chatAvatar, deleteUser }: IItemChat) => {

    const tools = () => document.querySelector(`.${styles.userTools__list}`) as HTMLElement;
    const btn = () => document.querySelector(`.${styles.header__userToolsBtn}`) as HTMLButtonElement;

    const chatMembersList = () => document.querySelector(`.${styles.chatUserList}`) as HTMLElement;


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
    }



    const avatarProps: IAvatarProps =
    {
        alt: `${chatName}-avatar`,
        src: chatAvatar,
        figureClassName: styles.chatData__figure,
        imgClassName: styles.figure__img,
        clickHandler: () => router.go('/user')
    };

    const avatar = new Avatar(avatarProps);

    const changeAvatar = (e: Event) => {
        e.preventDefault()
        const input = e.target as HTMLInputElement;
        const avatar = input.files?.item(0);
        const chatId = localStorage.getItem('activeChat');
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


    const avatarUpload = inputAndLabelComponent(avatarUploadProps);

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
            child: `<img class=${styles.list__img} src=${addUserBtnSvg} >`
        }
    );

    const deleteUserBtn = new Btn(
        {
            msg: 'Удалить пользователя',
            className: styles.item__btn,
            child: `<img class=${styles.list__img} src=${deleteUserBtnSvf} >`

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

    const sendMsgBtn = new Btn(
        {
            msg: '',
            className: styles.newMsg__sendMsgBtn
        }
    );

    const inputMsgProps: IInputProps =
    {
        id: 'inputMsg',
        name: 'inputMsg',
        type: 'text',
        disabled: false,
        value: '',
        placeholder: 'Сообщение',
        className: styles.newMsg__inputMsg
    };

    const inputMsg = new Input(inputMsgProps);
    const messages =
        [
            {
                message: "Привет",
                time: "11:56",
                className: styles.message__out
            },
            {
                message: "Как дела?",
                time: "11:56",
                className: styles.message__in
            },
            {
                message: `Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.

            Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.`,
                time: "11:56",
                className: styles.message__out
            },
            {
                message: "Привет",
                time: "11:56",
                className: styles.message__in
            },
            {
                message: "Как дела?",
                time: "11:56",
                className: styles.message__out
            },
            {
                message: `Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.

            Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.`,
                time: "11:56",
                className: styles.message__in
            },
            {
                message: "Привет ",
                time: "11:56",
                className: styles.message__out
            },
            {
                message: "Как дела?",
                time: "11:56",
                className: styles.message__in
            },
            {
                message: `Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.

            Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.`,
                time: "11:56",
                className: styles.message__out
            },
        ]

    const itemChatMesseges = messages.map(msg => {
        return new Message(msg)
    });


    const showChatUsers = () => {
        chatMembersList()?.classList.contains(styles.chatUserList_hidden) ?
            chatMembersList()?.classList.remove(styles.chatUserList_hidden) : chatMembersList()?.classList.add(styles.chatUserList_hidden);
    };


    const chatMembersCount = getActiveChatUsers()?.users.length ?? 1;

    const showMembersBtn = new Btn(
        {
            msg: `участников`,
            className: styles.chatData__showMembersBtn,
            clickHandler: () => {
                // ChatController.removeChat();
                // console.log(chatMembersList())
                // setToolsNotActive(tools(), btn())

                showChatUsers();
            },
            child: `<span class=${styles.showMembersBtn__msg}> ${chatMembersCount}</span>`
        }
    );

    const usersList = new UserList(
        {
            className: styles.chatUserList,
            deleteUser: deleteUser,
            showChatUsers: showChatUsers,
            ...getActiveChatUsers()
        }
    )

    return new ChatContent(
        'main',
        {
            attr: {
                class: styles.itemChat
            },
            chatAvatar: avatar,
            avatarUpload: avatarUpload,
            toolsBtn: toolsBtn,
            chatName: chatName,
            showMembersBtn: showMembersBtn,
            addUserBtn: addUserBtn,
            deleteUserBtn: deleteUserBtn,
            deleteChatBtn: deleteChatBtn,
            usersList: usersList,
            messages: itemChatMesseges,
            inputMsg: inputMsg,
            sendMsgBtn: sendMsgBtn,
            events: {
                click: () => {

                }
            }
        }
    );
}; 
