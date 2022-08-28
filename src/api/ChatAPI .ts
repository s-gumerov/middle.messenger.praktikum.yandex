import { BaseAPI } from './BaseApi';

interface IChatApiCreate {
    title: string
}

interface IChatApiAddUser {
    users: number[]
    chatId: number
}

class ChatApi extends BaseAPI {
    constructor() {
        super({ path: '/chats' });
    }

    public createChat(data: IChatApiCreate) {
        return this.create('/', {
            withCredentials: true,
            data: JSON.stringify(data),
        });
    }

    public getChat() {
        return this.request('/', {
            withCredentials: true,
        });
    }

    public removeChat(chatId: number) {
        return this.delete('/', {
            withCredentials: true,
            data: JSON.stringify({ chatId }),
        });
    }

    public addUserChat(data: IChatApiAddUser) {
        return this.update('/users', {
            withCredentials: true,
            data: JSON.stringify(data),
        });
    }

    public deleteUserChat(data: IChatApiAddUser) {
        return this.delete('/users', {
            withCredentials: true,
            data: JSON.stringify(data),
        });
    }

    public requestMessageToken(chatId: number) {
        return this.create(`/token/${chatId}`, {
            withCredentials: true,
        });
    }

    public getChatUsers(chatId: number) {
        return this.request(`/${chatId}/users`, {
            withCredentials: true,
        });
    }
}

export default new ChatApi();
















// const chatAPIInstance = new HTTPTransport();

// export class ChatAPI extends BaseAPI {
//     create() {
//         // Здесь уже не нужно писать полный путь /api/v1/chats/
//         return chatAPIInstance.post('/', { title: 'string' });
//     }

//     request() {
//         // Здесь уже не нужно писать полный путь /api/v1/chats/
//         return chatAPIInstance.get('/full');
//     }
// }