import { v4 as makeUUID } from 'uuid';
import { Component } from '../../services/Component';
import { tpl } from './tpl';
import { chatList as chatListComponent } from './components/chatList';
import { Avatar } from '../../components/avatar/Avatar';
import { Btn } from '../../components/btn/Btn';
import { IBtnProps } from '../../components/btn/interfaces';
import { IAvatarProps } from '../../components/avatar/interfaces';
import { Anchor } from '../../components/anchor/Anchor';
import { Input } from '../../components/input/Input';
import { IInputProps } from '../../components/input/interfaces';
import { InputAndLabelProps } from '../../components/inputAndLabel/interfaces';
import * as styles from './styles.module.sass';
import { IChatListItemProps } from './components/chatList/components/chatListItem/interfaces';
import { router } from '../../utils/router';
import { itemChat } from './components/itemChat';
import { IItemChat } from './components/itemChat/interfaces';
import { inputAndLabel } from '../../components/inputAndLabel';
import ChatController from '../../controllers/ChatController';
import { CHAT_NAME_REGEXP } from '../../utils/regularExpressions';


/*
email: "qwe123@yandex.ru"
first_name: "User"
login: "User"
password: "ivanovII123"
phone: "855555555"
second_name: "User"
avatar: "/fb69e115-e6dc-40cd-adad-afff81c7cd11/10cb2588-3082-4b8a-b071-93ba9b642869_avatar.jpeg"
display_name: null
email: "qwe123@yandex.ru"
first_name: "User"
id: 103609
login: "User"
phone: "855555555"
second_name: "User"
status: null
}

*/



const addChatBtnProps: IBtnProps =
{
    msg: '',
    className: styles.addChat__btn,
    clickHandler: () => {
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

const getChats = () => {
    ChatController.request().then(res => localStorage.setItem('chats', JSON.stringify(res)));
    const chats = localStorage.getItem("chats");

    if (chats) {
        console.log(JSON.parse(chats));

        return JSON.parse(chats) as IChatListItemProps[]

    }

};

const chatList = getChats();


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
    // focusHandler: focusHandler,
    // blurHandler: blurHandler,
    // inputHandler: inputHandler
};

const submitModalBtnProps: IBtnProps =
{
    btnType: 'submit',
    msg: 'Создать',
    className: styles.box__btn,
};

const closeModalBtnProps: IBtnProps =
{
    btnType: 'reset',
    msg: '',
    className: styles.modal__closeBtn,
    clickHandler: (e: Event) => {
        e.preventDefault();

        const modal = document.querySelector(`.${styles.modal}`);
        modal?.classList.remove(`${styles.modal_active}`)
    }
};



const itemChatProps: IItemChat =
{
    chatID: '123',
    userName: 'Супер пользователь',
    userAvatar: "https://images.unsplash.com/photo-1506891536236-3e07892564b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    messages:
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
        ],
};


const submitHandler = (e: Event) => {
    e.preventDefault();
    const { modalInput } = e.target as HTMLFormElement;
    const data = {
        title: modalInput.value,
    };

    const response = ChatController.createChat(data);
    response.then(res => console.log(res));

};


export class Chat extends Component {
    constructor() {
        super(
            'article',
            {
                attr: {
                    class: styles.chat
                },
                avatar: avatar,
                addChatBtn: new Btn(addChatBtnProps),
                searchInput: searchInput,
                chatList: chatList !== undefined && chatListComponent(chatList),
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
}




/*
const chatListProps: IChatListItemProps[] =
    [
        {
            avatarImg: 'https://images.unsplash.com/photo-1506891536236-3e07892564b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
            chatName: 'Иван',
            lastMsg: 'Тестовое сообщение',
            lastMsgTime: '15:12',
            msgCount: '1'
        },
        {
            avatarImg: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
            chatName: 'Иван',
            lastMsg: 'Тестовое сообщение',
            lastMsgTime: '15:12',
            msgCount: '2'
        },
        {
            avatarImg: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            chatName: 'Иван',
            lastMsg: 'Тестовое сообщение',
            lastMsgTime: '15:12',
            msgCount: '3'
        },
        {
            avatarImg: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
            chatName: 'Иван',
            lastMsg: 'Тестовое сообщение',
            lastMsgTime: '15:12',
            msgCount: '4'
        },
        {
            avatarImg: 'https://images.unsplash.com/photo-1550699566-83f93df24072?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            chatName: 'Иван',
            lastMsg: 'Тестовое сообщение',
            lastMsgTime: '15:12',
            msgCount: '5'
        },
        {
            avatarImg: 'https://images.unsplash.com/photo-1565413294262-fa587c396965?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
            chatName: 'Иван',
            lastMsg: 'Тестовое сообщение',
            lastMsgTime: '15:12',
            msgCount: '6'
        },
        {
            avatarImg: 'https://images.unsplash.com/photo-1591096071663-871ec555d6ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1056&q=80',
            chatName: 'Иван',
            lastMsg: 'Тестовое сообщение',
            lastMsgTime: '15:12',
            msgCount: '7'
        },
        {
            avatarImg: 'https://images.unsplash.com/photo-1601013692862-800b51078700?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            chatName: 'Иван',
            lastMsg: 'Тестовое сообщение Тестовое сообщение Тестовое сообщение Тестовое сообщение ',
            lastMsgTime: '15:12',
            msgCount: '8'
        },
    ];
    */