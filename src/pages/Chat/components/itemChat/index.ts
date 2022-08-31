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
import ChatController from '../../../../controllers/ChatController';

export const itemChat = ({ chatID, userName, userAvatar, messages }: IItemChat) => {

    const tools = () => document.querySelector(`.${styles.userTools__list}`) as HTMLElement;
    const btn = () => document.querySelector(`.${styles.header__userToolsBtn}`) as HTMLButtonElement;

    const setToolsNotActive = (tools: HTMLElement, btn: HTMLButtonElement) => {
        tools?.classList.add(styles.userTools__list_hidden);
        btn?.classList.remove(styles.header__userToolsBtn_active);
    };

    const setToolsActive = (tools: HTMLElement, btn: HTMLButtonElement) => {
        tools?.classList.remove(styles.userTools__list_hidden);
        btn?.classList.add(styles.header__userToolsBtn_active);
    };

    const toggleToolsState = () => {
        tools()?.classList.contains(styles.userTools__list_hidden) ?
            setToolsActive(tools(), btn()) : setToolsNotActive(tools(), btn());
    }



    const avatarProps: IAvatarProps =
    {
        alt: `${userName}-avatar`,
        src: userAvatar ?? 'https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg',
        figureClassName: styles.userData__figure,
        imgClassName: styles.figure__img,
        clickHandler: () => router.go('/user')
    };

    const avatar = new Avatar(avatarProps);

    const toolsBtn = new Btn(
        {
            msg: '',
            className: styles.header__userToolsBtn,
            clickHandler: () => toggleToolsState()
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

    const deleteChatBtn = new Btn(
        {
            msg: '',
            className: styles.item__deleteChatBtn,
            clickHandler: () => {
                ChatController.removeChat();
                setToolsNotActive(tools(), btn())
            }

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
            toolsBtn: toolsBtn,
            userName: userName,
            chatID: chatID,
            addUserBtn: addUserBtn,
            deleteUserBtn: deleteUserBtn,
            deleteChatBtn: deleteChatBtn,
            messages: itemChatMesseges,
            inputMsg: inputMsg,
            sendMsgBtn: sendMsgBtn,
            events: {
                click: () => {

                }
            }
        }
    );
}; 
