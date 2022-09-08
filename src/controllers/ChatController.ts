import { errorHandler } from '../utils/errorHandler';
// import { store } from '../store';
import Store from '../Store/Store';
import { Actions } from '../Store';
import { router } from '../utils/router';
import ChatAPI from '../api/ChatAPI';
import { IChatList } from '../pages/Messenger/components/Chat/interfaces';




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
                console.log(data)
                // store.setState({
                //     chats,
                // });
                // if (!store.state.chatId) {
                //     store.setState({
                //         chatId: chats[0]?.id || null,
                //     });
                // }
                if (data) {
                    const chatList = data as IChatList[];
                    Actions.setChatList(chatList);
                    localStorage.setItem('chats', JSON.stringify(data));
                    return data;
                };

            })
            .catch((error) => {
                router.go('/auth/signin');
                errorHandler(error);
            })
    }

    public async createChat(data: IChatApiCreate) {
        return ChatAPI.createChat(data)
            .then(() => {
                this.request()
                // .then(() => location.reload())
            })
            .catch(errorHandler)
    }



    public async removeChat() {
        const chatId = localStorage.getItem('activeChat');
        if (!chatId) {
            return alert('Выберите чат, кликните и повторите удаление')
        };

        return ChatAPI.removeChat(JSON.parse(chatId))
            .then(() => {
                localStorage.removeItem('activeChat')
                this.request()
                    .then(() => location.reload())
            });
    }

    public async addUserChat(data: IChatApiAddUser) {
        return ChatAPI.addUserChat(data)
            .then(() => {
                this.request()
                    .then(() => location.reload())
            })
            .catch(errorHandler);
    }

    public async deleteUserChat(data: IChatApiAddUser) {
        return ChatAPI.deleteUserChat(data)
            .then(() => {
                this.request()
                    .then(() => location.reload())
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

    public async requestChatUsers(chatId: number | string) {
        return ChatAPI.getChatUsers(chatId)
            .then((users) => {
                localStorage.setItem('activeChatUsers',
                    JSON.stringify({
                        id: `${chatId}`,
                        users: users
                    }))

                return users;
            })
            .catch(errorHandler);
    }

    public async updateAvatar(data: FormData) {
        return ChatAPI.updateAvatar(data)
            .then((chat) => {
                this.request()
                alert('Аватар обновлен')
                console.log(chat)
                location.reload();
                // store.setState({
                //     currentUser: user,
                // });
                return chat;
            })
            .catch(errorHandler)
    }

}

export default new ChatController();
