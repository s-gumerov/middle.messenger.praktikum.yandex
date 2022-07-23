import styles from './styles.module.sass';
import ChatTmpl from './chat.hbs';
import { Avatar } from '../../components/avatar/avatar';
import { Input } from '../../components/input/input';
import { Btn } from '../../components/button/button';
import { ChatListItem } from './components/chatList/chatListItem';


const avatarProps =
{
    alt: 'автар',
    src: `https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg`,
    figureClassName: styles.figure,
    imgClassName: styles.figure__img
};

const anchorToProfileProps =
{
    anchorPath: '/profile',
    msg: 'Профиль',
    className: styles.nav__anchorToProfile
};

const anchorToProfile = Btn(anchorToProfileProps);

const searchInputProps =
{
    id: 'searchInput',
    type: 'text',
    placeholder: 'Поиск',
    className: styles.chatSearch__input
};

const searchInput = Input(searchInputProps);

const chatListProps = [
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

const chatList = chatListProps.map(chat => ChatListItem(chat)).join('');

const props = {
    anchorToProfile: anchorToProfile,
    chatSearch: searchInput,
    chatList: chatList,
    avatar: Avatar(avatarProps),
};

export const Chat = ChatTmpl({ ...styles, ...props });