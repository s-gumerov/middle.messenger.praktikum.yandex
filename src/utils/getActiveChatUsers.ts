import { IActiveChatUsers } from "../pages/Messenger/components/ChatContent/interfaces";

export const getActiveChatUsers = () => {
    const activeChatUsers = localStorage.getItem('activeChatUsers');
    if (!activeChatUsers) {
        return;
    };
    return JSON.parse(activeChatUsers) as IActiveChatUsers;
};
