import { IChatProps } from "../pages/Messenger/components/Chat/interfaces";

export const getChats = () => {
    const chats = localStorage.getItem("chats");
    if (!chats) {
        return;
    };
    return JSON.parse(chats) as IChatProps[];
};