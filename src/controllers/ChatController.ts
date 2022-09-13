import { errorHandler } from '../utils/errorHandler';
import { Actions } from '../Store';
import ChatAPI from '../api/ChatAPI';
import { IChatUsers, IActiveChatUsers } from '../pages/Messenger/components/ChatContent/interfaces';
import { IChatList } from '../pages/Messenger/components/Chat/interfaces';
import { IMessageWebSocketConnect } from './MessageController';
import MessageController from './MessageController';


export interface IChatApiCreate {
    title: string
}

export interface IChatApiAddUser {
    users: number[]
    chatId: number
}


class ChatController {

    public async request() {
        return ChatAPI.getChat()
            .then((data) => {
                return Actions.setChatList(data);
            })
            .catch((error) => {
                errorHandler(error);
            })
    }

    public async createChat(data: IChatApiCreate) {
        return ChatAPI.createChat(data)
            .then(() => {
                Actions.removeActiveChat()
                this.request()
            })
            .catch(errorHandler)
    }

    public async removeChat() {
        const { id } = Actions.getActiveChatState();

        if (!id) {
            return alert('Выберите чат, кликните и повторите удаление')
        };

        return ChatAPI.removeChat(id)
            .then(() => {
                const chatList = Actions.getChatListState() as IChatList[];
                const newChatList = chatList.filter(chat => chat.id !== id);
                //обновим store, чтобы удалить лишний чат
                MessageController.leave();
                Actions.removeActiveChat();
                Actions.setChatList(newChatList);
            });
    }

    public async addUserChat(data: IChatApiAddUser) {
        return ChatAPI.addUserChat(data)
            .then(() => {
                //обновим store, чтобы получить изменения в активном чате
                this.requestChatUsers(Actions.getActiveChatState());
            })
            .catch(errorHandler);
    }

    public async deleteUserChat(data: IChatApiAddUser) {
        return ChatAPI.deleteUserChat(data)
            .then(() => {
                //обновим store, чтобы получить изменения в активном чате
                this.requestChatUsers(Actions.getActiveChatState());
            })
            .catch(errorHandler);
    }

    public async getTokenToMessagesServer(chatId: number) {
        return ChatAPI.getTokenToMessagesServer(chatId)
            .then((data) => {
                if (!data.token) {
                    return;
                };
                Actions.setTokenToMessagesServer(data.token);
                const { id } = Actions.getProfileState();
                if(!id){
                    return;
                };
                
                const socketOptios: IMessageWebSocketConnect =
                {
                    userId: id,
                    chatId: chatId,
                    token: data.token
                };
                MessageController.connect(socketOptios);
            })
            .catch(errorHandler);
    }

    public async requestChatUsers(data: IChatList) {
        const { id, title, avatar } = data;
        return ChatAPI.getChatUsers(id)
            .then((users) => {
                const activeChat: IActiveChatUsers =
                {
                    id: id,
                    title: title,
                    avatar: avatar,
                    users: users as IChatUsers[]
                }

                Actions.setActiveChat(activeChat);
                
                this.getTokenToMessagesServer(id);
            })
            .catch(errorHandler);
    }

    public async updateAvatar(data: FormData) {
        return ChatAPI.updateAvatar(data)
            .then((chat) => {
                if (!chat.avatar) {
                    return;
                };
                let { id, avatar, users } = Actions.getActiveChatState();
                avatar = chat.avatar;




                const chatList = Actions.getChatListState() as IChatList[];

                const updateChatList = chatList.map(chat => {
                    if (chat.id === id) {
                        chat.avatar = avatar;
                        Actions.setActiveChat({ ...chat, users: users });
                        return chat;
                    };
                    return chat;
                });
                Actions.setChatList(updateChatList);
            })
            .catch(errorHandler)
    }

}

export default new ChatController();
