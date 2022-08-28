interface IMessage {
    text?:string,
    date?:string,
    imgSrc?:string
}

export interface IItemChat {
    chatID: string,
    userName:string,
    userAvatar: string,
    messages: [IMessage],
    clickHandler?: (e: Event) => void,
}