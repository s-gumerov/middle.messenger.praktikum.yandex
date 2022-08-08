import * as styles from './styles.module.sass';
import ChatListItemTmpl from './chatListItem.hbs';
import { Avatar } from '../../../../components/avatar/avatar';
import { Btn } from '../../../../components/btn/button';

export const ChatListItem = ({ avatarImg, chatName, lastMsg, lastMsgTime, msgCount }) => {

    const AvatarProps =
    {
        alt: 'user-avatar',
        src: avatarImg ?? 'https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg',
        figureClassName: styles.figure,
        imgClassName: styles.figure__img
    };

    const BtnProps =
    {
        msg: msgCount,
        className: styles.msgInfo__msgCountBtn
    };

    const ChatListItemTmplProps =
    {
        avatar: Avatar(AvatarProps),
        chatName: chatName,
        lastMsg: lastMsg,
        lastMsgTime: lastMsgTime,
        msgCountBtn: Btn(BtnProps)
    };

    return ChatListItemTmpl({ ...styles, ...ChatListItemTmplProps });
};