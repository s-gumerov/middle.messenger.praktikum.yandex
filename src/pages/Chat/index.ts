import { Chat } from './Chat';
import { chatList as chatListComponent } from './components/chatList';
import { avatar as avatarComponent } from '../../components/avatar';
import { IAvatarProps } from '../../components/avatar/interfaces';
import { btn as btnComponent } from '../../components/btn';
import { input as inputComponent } from '../../components/input';
import { IInputProps } from '../../components/input/interfaces';
import * as styles from './styles.module.sass';
import { IChatListItemProps } from './components/chatListItem/interfaces';



const avatarProps: IAvatarProps =
{
    alt: 'автар',
    src: `https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg`,
    figureClassName: styles.figure,
    imgClassName: styles.figure__img
};

const avatar = avatarComponent(avatarProps);

const anchorToProfile = btnComponent(
    {
        anchorPath: '/profile',
        msg: 'Профиль',
        className: styles.nav__anchorToProfile
    }
);

const searchInputProps: IInputProps =
{
    id: 'searchInput',
    name: 'searchInput',
    type: 'text',
    disabled: false,
    value: '',
    placeholder: 'Поиск',
    className: styles.chatSearch__input
};

const searchInput = inputComponent(searchInputProps);

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

export const chat = new Chat(
    'article',
    {
        attr: {
            class: styles.chat
        },
        avatar: avatar,
        searchInput: searchInput,
        chatList: chatList,
        anchorToProfile: anchorToProfile,
        // events: {
        //     "submit": submitHandler,
        // }
    });
;
