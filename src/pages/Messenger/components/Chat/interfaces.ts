// export interface IChatListItemProps {
//     avatarImg: string,
//     chatName: string,
//     lastMsg: string,
//     lastMsgTime: string,
//     msgCount: string,
//     clickHandler?: (e: Event) => void,
//     focusHandler?: (e: Event) => void,
//     blurHandler?: (e: Event) => void
// }

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
}