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
        try {
            const getChatResponse = await ChatAPI.getChat();
            Actions.setChatList(getChatResponse);
        } catch (error) {
            errorHandler(error);
        }
    }

    public async createChat(data: IChatApiCreate) {
        try {
            await ChatAPI.createChat(data);
            Actions.removeActiveChat();
            await this.request();
        } catch (error) {

        }
    }

    public async removeChat() {
        try {
            const { id } = Actions.getActiveChatState();

            if (!id) {
                return alert('Выберите чат, кликните и повторите удаление')
            };

            await ChatAPI.removeChat(id);
            const chatList = Actions.getChatListState() as IChatList[];
            const newChatList = chatList.filter(chat => chat.id !== id);
            //обновим store, чтобы удалить лишний чат
            MessageController.leave();
            Actions.removeActiveChat();
            Actions.setChatList(newChatList);
        } catch (error) {
            errorHandler(error);
        }

    }

    public async addUserChat(data: IChatApiAddUser) {
        try {
            await ChatAPI.addUserChat(data);

            //обновим store, чтобы получить изменения в активном чате
            await this.requestChatUsers(Actions.getActiveChatState());
        } catch (error) {
            errorHandler(error);
        }
    }

    public async deleteUserChat(data: IChatApiAddUser) {
        try {
            await ChatAPI.deleteUserChat(data);

            //обновим store, чтобы получить изменения в активном чате
            await this.requestChatUsers(Actions.getActiveChatState());
        } catch (error) {
            errorHandler(error);
        }
    }

    public async getTokenToMessagesServer(chatId: number) {
        try {
            const data = await ChatAPI.getTokenToMessagesServer(chatId);
            if (!data.token) {
                return;
            };
            Actions.setTokenToMessagesServer(data.token);
            const { id } = Actions.getProfileState();
            if (!id) {
                return;
            };

            const socketOptios: IMessageWebSocketConnect =
            {
                userId: id,
                chatId: chatId,
                token: data.token
            };
            MessageController.connect(socketOptios);
        } catch (error) {
            errorHandler(error);
        }
    }

    public async requestChatUsers(data: IChatList) {
        try {
            const { id, title, avatar } = data;
            const getChatUsersResponse = await ChatAPI.getChatUsers(id);
            const activeChat: IActiveChatUsers =
            {
                id: id,
                title: title,
                avatar: avatar,
                users: getChatUsersResponse as IChatUsers[]
            };

            Actions.setActiveChat(activeChat);

            await this.getTokenToMessagesServer(id);

        } catch (error) {
            errorHandler(error);
        }
    }

    public async updateAvatar(data: FormData) {
        try {
            const getChatAvatarResponse = await ChatAPI.updateAvatar(data);
            if (!getChatAvatarResponse.avatar) {
                return;
            };

            let { id, avatar, users } = Actions.getActiveChatState();
            avatar = getChatAvatarResponse.avatar;
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

        } catch (error) {
            errorHandler(error);
        }
    }

}

export default new ChatController();
