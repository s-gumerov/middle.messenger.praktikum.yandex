import { ItemChat } from './ItemChat';
import { IItemChat } from './interfaces';
import { Avatar } from '../../../../components/avatar/Avatar';
import { IAvatarProps } from '../../../../components/avatar/interfaces';
import { Btn } from '../../../../components/btn/Btn';
import { Input } from '../../../../components/input/Input';
import * as styles from './styles.module.sass';
import { router } from '../../../../utils/router';
import { IInputProps } from '../../../../components/input/interfaces';

export const itemChat = ({ chatID, userName, userAvatar, messages, clickHandler }: IItemChat) => {

    const avatarProps: IAvatarProps =
    {
        alt: `${userName}-avatar`,
        src: userAvatar ?? 'https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg',
        figureClassName: styles.userData__figure,
        imgClassName: styles.figure__img,
        clickHandler: () => router.go('/user')
    };

    const avatar = new Avatar(avatarProps);

    const userToolsBtn = new Btn(
        {
            msg: '',
            className: styles.header__userToolsBtn,
            clickHandler: () => {
                const userTools = document.querySelector(`.${styles.userTools__list}`);

                userTools?.classList.contains(styles.userTools__list_hidden) ?
                    userTools?.classList.remove(styles.userTools__list_hidden) :
                    userTools?.classList.add(styles.userTools__list_hidden);
            }
        }
    );

    const addUserBtn = new Btn(
        {
            msg: '',
            className: styles.item__addUserBtn
        }
    );

    const deleteUserBtn = new Btn(
        {
            msg: '',
            className: styles.item__deleteUserBtn
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

    return new ItemChat(
        'main',
        {
            attr: {
                class: styles.itemChat
            },
            avatar: avatar,
            userToolsBtn: userToolsBtn,
            userName: userName,
            chatID: chatID,
            addUserBtn: addUserBtn,
            deleteUserBtn: deleteUserBtn,
            messages: messages,
            inputMsg: inputMsg,
            sendMsgBtn: sendMsgBtn,
        }
    );
}; 
