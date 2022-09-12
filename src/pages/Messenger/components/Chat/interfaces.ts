export interface IChatProps {
    id: number,
    title: string,
    avatar: null | string,
    created_by: number,
    unread_count: number,
    last_message: {
        id: number,
        content: string,
        time: string
    },
};

export interface IChatList {
    id: number,
    title: string,
    avatar: null | string,
    created_by: number,
    unread_count: number,
    last_message: {
        id: number,
        content: string,
        time: string
    }
};
