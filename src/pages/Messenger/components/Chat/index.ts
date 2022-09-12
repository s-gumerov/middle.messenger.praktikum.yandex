import { Chat } from './Chat';
import { IChatProps } from './interfaces';
import { Avatar } from '../../../../components/avatar/Avatar';
import { IAvatarProps } from '../../../../components/avatar/interfaces';
import { Btn } from '../../../../components/btn/Btn';
import * as styles from './styles.module.sass';
import env from '../../../../utils/env'
import { Actions } from '../../../../Store';
import ChatController from '../../../../controllers/ChatController';

export const chat = ({ id, title, avatar, created_by, unread_count, last_message }: IChatProps) => {

    const setActiveChat = (e: Event) => {
        const activeChatElement = e.currentTarget as HTMLDivElement;
        const activeChatId = activeChatElement.id;
        const chatList = Actions.getChatListState();
        const { id } = Actions.getActiveChatState();
        const prevActivChat = document.getElementById(`${id}`) as HTMLDivElement;

        if (id && prevActivChat) {
            prevActivChat.style.background = 'none';
        };

        activeChatElement.style.background = '#E4EDFD';

        const data = chatList.find(chat => `${chat['id']}` === activeChatId);

        if (!data) {
            return;
        }

        return ChatController.requestChatUsers(data);
    };

    const avatarProps: IAvatarProps =
    {
        alt: 'user-avatar',
        src: avatar ? `${env.HOST_RESOURCES}${avatar}` : 'https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg',
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

    function formatDate(str: string) {
        const regEx = /^(\d{2})(\d{2})?(\d{4})?/g;
        return str.replaceAll('.', '').substring(0, 7).replace(regEx, (match, p1, p2, p3) => {
            return `${(p1) ? p1 + '.' : ''}${(p2) ? p2 + '.' : ''}${(p3) ? p3 : ''}`;
        })
    };

    return new Chat(
        'div',
        {
            avatar: chatAvatar,
            chatName: title,
            lastMsg: (): string => {
                if (!last_message) {
                    return '';
                }
                return last_message.content
            },
            lastMsgTime: (): string => {

                if (!last_message) {
                    return '';
                }
                return formatDate(last_message.time.slice(11, 19).replaceAll(':', ''))
            },
            msgCountBtn: unread_count > 0 ? msgCountBtn : null,
            attr: {
                id: id
            },
            events: {
                click: setActiveChat
            }

        }
    );
}; 
