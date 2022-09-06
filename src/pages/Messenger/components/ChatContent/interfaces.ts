export interface IItemChat {
    chatID: string,
    chatName: string,
    chatAvatar: string,
    clickHandler?: (e: Event) => void,
    deleteUser: (chatId: number, userId: number) => void
}

export interface IChatUsers {
    id: number,
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    email: string,
    phone: string,
    avatar: string,
    role: string
};

export interface IActiveChatUsers {
    id: number,
    users: IChatUsers[],
};

export interface IFindUserRequest {
    login: string
}