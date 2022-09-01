import { IMessageProps } from "./components/message/interfaces";

export interface IItemChat {
    chatID: string,
    userName: string,
    userAvatar: string,
    messages: IMessageProps[],
    clickHandler?: (e: Event) => void,
}