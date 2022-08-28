import ChatAPI from '../api/ChatAPI ';
import { errorHandler } from '../utils/errorHandler';
// import { store } from '../store';
import { router } from '../utils/router';


interface IChatApiCreate {
    title: string
}

interface IChatApiAddUser {
    users: number[]
    chatId: number
}


class ChatController {

    public async create(data: IChatApiCreate) {
        return ChatAPI.createChat(data)
            .then((chat) => {
                alert('Чат создан');
                return chat.id;
            })
            .catch(errorHandler)
    }

    public async request() {
        return ChatAPI.getChat()
            .then((chats) => {
                // store.setState({
                //     chats,
                // });
                // if (!store.state.chatId) {
                //     store.setState({
                //         chatId: chats[0]?.id || null,
                //     });
                // }
                return chats;
            })
            .catch((error) => {
                router.go('/sign-in');
                errorHandler(error);
            })
    }

    public async removeChat() {
        // return ChatAPI.removeChat(store.state.chatId)
        //     .then(() => {
        //         this.request();
        //         alert('Чат удалён');
        //     });
    }

    public async addUserChat(data: IChatApiAddUser) {
        return ChatAPI.addUserChat(data)
            .then(() => {
                alert('Пользователи добавлены');
            })
            .catch(errorHandler);
    }

    public async deleteUserChat(data: IChatApiAddUser) {
        return ChatAPI.deleteUserChat(data)
            .then(() => {
                alert('Пользователи удалены');
            })
            .catch(errorHandler);
    }

    public async requestMessageToken(chatId: number) {
        return ChatAPI.requestMessageToken(chatId)
            .then((auth) => {
                return auth;
            })
            .catch(errorHandler);
    }

    public async requestChatUsers(chatId: number) {
        return ChatAPI.getChatUsers(chatId)
            .then((users) => {
                return users;
            })
            .catch(errorHandler);
    }
}

export default new ChatController();