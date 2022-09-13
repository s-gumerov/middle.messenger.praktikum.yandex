import env from '../utils/env';
import { Actions } from '../Store';
import { IChatMessages } from '../pages/Messenger/components/ChatContent/components/message/interfaces';
import ChatController from './ChatController';
import { formatLastMsg } from '../utils/formatLastMsg';

export interface IMessageWebSocketConnect {
    userId: number
    chatId: number
    token: string
}

export interface IMessageWebSocketGet {
    offset: number
}

class MessageController {
    private _ws!: WebSocket;
    private _userId!: number;
    private _chatId!: number;
    private _token!: string;
    private _ping: any;

    constructor() {
        this._handleOpen = this._handleOpen.bind(this);
        this._handleMassage = this._handleMassage.bind(this);
        this._handleClose = this._handleClose.bind(this);
    }

    public connect(options: IMessageWebSocketConnect) {
        this._userId = options.userId;
        this._chatId = options.chatId;
        this._token = options.token;
        this._ws = new WebSocket(`${env.HOST_WS}/chats/${options.userId}/${options.chatId}/${options.token}`);
        this._addEvents();
    }

    private _addEvents() {
        this._ws.addEventListener('open', this._handleOpen);
        this._ws.addEventListener('message', this._handleMassage);
        this._ws.addEventListener('close', this._handleClose);
    }

    private _removeEvents() {
        this._ws.removeEventListener('open', this._handleOpen);
        this._ws.removeEventListener('message', this._handleMassage);
        this._ws.removeEventListener('close', this._handleClose);
    }

    private _handleOpen() {
        this.getMessages({ offset: 0 });
        ChatController.request();
        this._ping = setInterval(() => {
            this._ws.send('');
        }, 10000);
    }

    private _handleMassage(e: MessageEvent) {
        const data = JSON.parse(e.data) as IChatMessages[];

        if (Array.isArray(data)) {
            data.forEach(msg => {
                msg.time = formatLastMsg(msg.time)
                return msg
            })

            Actions.setChatMessages(data);
            ChatController.request()
        };
    }


    private _handleClose(e: CloseEventInit) {

        if (e.wasClean) {
            alert('Соединение закрыто');
        } else if (e.code === 1006) {
            this._reconnection();
        }
    }


    public getMessages(options: IMessageWebSocketGet) {
        this._ws.send(JSON.stringify({
            content: options.offset.toString(),
            type: 'get old',
        }));
    }

    public leave() {
        clearInterval(this._ping);
        this._ws.close();
        this._removeEvents();
    }

    public sendMessage(message: string) {
        this._ws.send(JSON.stringify({
            content: message,
            type: 'message',
        }));
        this._handleOpen()
    }

    private _reconnection() {
        this.connect({
            userId: this._userId,
            chatId: this._chatId,
            token: this._token,
        });
    }

}

export default new MessageController();