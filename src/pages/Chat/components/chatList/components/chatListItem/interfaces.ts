export interface IChatListItemProps {
    avatarImg: string,
    chatName: string,
    lastMsg: string,
    lastMsgTime: string,
    msgCount: string,
    clickHandler?: (e: Event) => void,
    focusHandler?: (e: Event) => void,
    blurHandler?: (e: Event) => void
}