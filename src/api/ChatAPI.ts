import { BaseAPI } from "./BaseApi";

interface IChatApiCreate {
    title: string
}

interface IChatApiAddUser {
    users: number[]
    chatId: number
}




export class ChatApi extends BaseAPI {
    constructor() {
        super({ path: '/chats' });
    }

    public createChat(data: IChatApiCreate) {
        return this.create('/', {
            withCredentials: true,
            data: data,
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
            data: { chatId: chatId },
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

    public getChatUsers(chatId: number | string) {
        return this.request(`/${chatId}/users`, {
            withCredentials: true,
        });
    }

    // chatId: string, data: FormData
    public updateAvatar(data: FormData) {
        return this.update('/avatar', {
            headers: {},
            withCredentials: true,
            data,
        });
    }
}






export default new ChatApi()
