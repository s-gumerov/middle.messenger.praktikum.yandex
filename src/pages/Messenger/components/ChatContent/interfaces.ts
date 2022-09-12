export interface IchatContent {
    id: string,
    title: string,
    avatar: string,
}

export interface IChatUsers {
    id: number,
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    email: string,
    phone: string,
    avatar: string | null,
    role: string
};

export interface IActiveChatUsers {
    id: number | null,
    title: string,
    avatar: string | null,
    users: IChatUsers[],
};

export interface IFindUserRequest {
    login: string
}