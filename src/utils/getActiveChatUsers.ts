import { Actions } from "../Store";
import { IActiveChatUsers } from "../pages/Messenger/components/ChatContent/interfaces";

export const getActiveChatUsers = (): IActiveChatUsers =>
    Actions.getActiveChatState() as IActiveChatUsers;
;
