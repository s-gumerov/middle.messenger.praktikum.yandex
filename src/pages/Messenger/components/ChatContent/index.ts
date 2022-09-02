import { ChatContent } from './ChatContent';
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
import addUserBtnSvg from '../../../../styles/icons/addUserBtn.svg';
import deleteUserBtnSvf from '../../../../styles/icons/deleteUserBtn.svg';
import deleteSvg from '../../../../styles/icons/delete.svg';



export const itemChat = ({ chatID, chatName, chatAvatar }: IItemChat) => {

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
        alt: `${chatName}-avatar`,
        src: chatAvatar,
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
    const addUserBtnImg =
        `
        <img class=${styles.list__img} src=${addUserBtnSvg} >
    `;

    const addUserBtn = new Btn(
        {
            msg: 'Добавить пользователя',
            className: styles.item__btn,
            child: addUserBtnImg
        }
    );
    const deleteUserBtnImg =
        `
        <img class=${styles.list__img} src=${deleteUserBtnSvf} >
    `;

    const deleteUserBtn = new Btn(
        {
            msg: 'Удалить пользователя',
            className: styles.item__btn,
            child: deleteUserBtnImg

        }
    );

    const deleteChatBtnImg =
        `
    <img class=${styles.list__img} src=${deleteSvg} >
`;

    const deleteChatBtn = new Btn(
        {
            msg: 'Удалить чат',
            className: styles.item__btn,
            clickHandler: () => {
                ChatController.removeChat();
                setToolsNotActive(tools(), btn())
            },
            child: deleteChatBtnImg
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
    const messages =
        [
            {
                message: "Привет",
                time: "11:56",
                className: styles.message__out
            },
            {
                message: "Как дела?",
                time: "11:56",
                className: styles.message__in
            },
            {
                message: `Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.

            Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.`,
                time: "11:56",
                className: styles.message__out
            },
            {
                message: "Привет",
                time: "11:56",
                className: styles.message__in
            },
            {
                message: "Как дела?",
                time: "11:56",
                className: styles.message__out
            },
            {
                message: `Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.

            Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.`,
                time: "11:56",
                className: styles.message__in
            },
            {
                message: "Привет ",
                time: "11:56",
                className: styles.message__out
            },
            {
                message: "Как дела?",
                time: "11:56",
                className: styles.message__in
            },
            {
                message: `Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.

            Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.`,
                time: "11:56",
                className: styles.message__out
            },
        ]

    const itemChatMesseges = messages.map(msg => {
        return new Message(msg)
    });

    return new ChatContent(
        'main',
        {
            attr: {
                class: styles.itemChat
            },
            chatAvatar: avatar,
            toolsBtn: toolsBtn,
            chatName: chatName,
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
