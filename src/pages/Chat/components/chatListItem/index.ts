import { ChatListItem } from './ChatListItem';
import { IChatListItemProps } from './interfaces';
import { avatar as avatarComponent } from '../../../../components/avatar';
import { IAvatarProps } from '../../../../components/avatar/interfaces';
import { btn as btnComponent } from '../../../../components/btn';
import * as styles from './styles.module.sass';

export const chatListItem = ({ avatarImg, chatName, lastMsg, lastMsgTime, msgCount }: IChatListItemProps) => {

    const avatarProps: IAvatarProps =
    {
        alt: 'user-avatar',
        src: avatarImg ?? 'https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg',
        figureClassName: styles.figure,
        imgClassName: styles.figure__img
    };

    const avatar = avatarComponent(avatarProps);

    const msgCountBtn = btnComponent(
        {
            msg: msgCount,
            className: styles.msgInfo__msgCountBtn
        }
    );

    return new ChatListItem(
        'article',
        {
            attr: {
                class: styles.chatListItem
            },
            avatar: avatar,
            chatName: chatName,
            lastMsg: lastMsg,
            lastMsgTime: lastMsgTime,
            msgCountBtn: msgCountBtn
        });
}; 
