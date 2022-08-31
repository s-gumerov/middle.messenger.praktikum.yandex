import { ChatListItem } from './ChatListItem';
import { IChatListItemProps } from './interfaces';
import { Avatar } from '../../../../../../components/avatar/Avatar';
import { IAvatarProps } from '../../../../../../components/avatar/interfaces';
import { Btn } from '../../../../../../components/btn/Btn';
import * as styles from './styles.module.sass';

export const chatListItem = ({ id, title, avatar, created_by, unread_count, last_message }: IChatListItemProps) => {

    const avatarProps: IAvatarProps =
    {
        alt: 'user-avatar',
        src: avatar ?? 'https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg',
        figureClassName: styles.figure,
        imgClassName: styles.figure__img
    };

    const chatAvatar = new Avatar(avatarProps);

    const msgCountBtn = new Btn(
        {
            msg: `${unread_count}`,
            className: styles.msgInfo__msgCountBtn
        }
    );

    const setActiveChat = (e: Event) => {
        const chat = e.currentTarget as HTMLDivElement;
        localStorage.setItem('activeChat', JSON.stringify(chat.id));
    }

    return new ChatListItem(
        'div',
        {
            avatar: chatAvatar,
            chatName: title,
            lastMsg: last_message,
            lastMsgTime: created_by,
            msgCountBtn: msgCountBtn,
            attr: {
                id: id
            },
            events: {
                click: setActiveChat
            }

        }
    );
}; 
