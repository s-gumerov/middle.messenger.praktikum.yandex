import { Actions } from "../Store";
import { IActiveChatUsers } from "../pages/Messenger/components/ChatContent/interfaces";

export const getActiveChatUsers = (): IActiveChatUsers => {
    const activeChatUsers = Actions.getActiveChatState();
    return activeChatUsers as IActiveChatUsers;
};
