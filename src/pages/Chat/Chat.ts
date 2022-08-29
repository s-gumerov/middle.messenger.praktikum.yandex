import { Component } from '../../services/Component';
import { tpl } from './tpl';
import { chatList as chatListComponent } from './components/chatList';
import { Avatar } from '../../components/avatar/Avatar';
import { IAvatarProps } from '../../components/avatar/interfaces';
import { Anchor } from '../../components/anchor/Anchor';
import { Input } from '../../components/input/Input';
import { IInputProps } from '../../components/input/interfaces';
import * as styles from './styles.module.sass';
import { IChatListItemProps } from './components/chatList/components/chatListItem/interfaces';
import { router } from '../../utils/router';
import { itemChat } from './components/itemChat';
import { IItemChat } from './components/itemChat/interfaces';



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

const chatList = chatListComponent(chatListProps);


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



export class Chat extends Component {
    constructor() {
        super(
            'article',
            {
                attr: {
                    class: styles.chat
                },
                avatar: avatar,
                searchInput: searchInput,
                chatList: chatList,
                anchorToProfile: anchorToProfile,
                itemChat: itemChat(itemChatProps)
            }
        )
    }
    render() {
        return this.compile(tpl);
    }
}