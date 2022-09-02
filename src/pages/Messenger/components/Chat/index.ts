// import { setImgSrc } from '../../../../utils/setImgSrc';
import { inputAndLabel as inputAndLabelComponent } from '../../../../components/inputAndLabel';
import { InputAndLabelProps } from '../../../../components/inputAndLabel/interfaces';
// import UserProfileController from '../../../../controllers/UserProfileController';
import ChatController from '../../../../controllers/ChatController';
import { v4 as makeUUID } from 'uuid'
import { Chat } from './Chat';
import { IChatProps } from './interfaces';
import { Avatar } from '../../../../components/avatar/Avatar';
import { IAvatarProps } from '../../../../components/avatar/interfaces';
import { Btn } from '../../../../components/btn/Btn';
import * as styles from './styles.module.sass';
import env from '../../../../utils/env'

export const chat = ({ id, title, avatar, created_by, unread_count, last_message }: IChatProps) => {

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

    const setActiveChat = (e: Event) => {
        const chat = e.currentTarget as HTMLDivElement;
        chat.classList.add(styles.chat_active)
        localStorage.setItem('activeChat', JSON.stringify(chat.id));
    }

    const changeAvatar = (e: Event) => {
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


    const avatarUpload = inputAndLabelComponent(avatarUploadProps)

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
            avatarUpload: avatarUpload,
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
