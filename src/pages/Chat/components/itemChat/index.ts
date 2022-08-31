import { ItemChat } from './ItemChat';
import { IItemChat } from './interfaces';
import { Avatar } from '../../../../components/avatar/Avatar';
import { IAvatarProps } from '../../../../components/avatar/interfaces';
import { Btn } from '../../../../components/btn/Btn';
import { Input } from '../../../../components/input/Input';
import { Message } from './components/message/Message';
import * as styles from './styles.module.sass';
import { router } from '../../../../utils/router';
import { IInputProps } from '../../../../components/input/interfaces';

export const itemChat = ({ chatID, userName, userAvatar, clickHandler, messages }: IItemChat) => {

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
                const userToolsBtn = document.querySelector(`.${styles.header__userToolsBtn}`);

                const setUserToolsActive = () => {
                    userTools?.classList.remove(styles.userTools__list_hidden);
                    userToolsBtn?.classList.add(styles.header__userToolsBtn_active);
                };

                const setUserToolsNotActive = () => {
                    userTools?.classList.add(styles.userTools__list_hidden);
                    userToolsBtn?.classList.remove(styles.header__userToolsBtn_active);
                };

                userTools?.classList.contains(styles.userTools__list_hidden) ?
                    setUserToolsActive() : setUserToolsNotActive();
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


    const itemChatMesseges = messages.map(msg => {
        return new Message(msg)
    });

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
            messages: itemChatMesseges,
            inputMsg: inputMsg,
            sendMsgBtn: sendMsgBtn,
        }
    );
}; 
