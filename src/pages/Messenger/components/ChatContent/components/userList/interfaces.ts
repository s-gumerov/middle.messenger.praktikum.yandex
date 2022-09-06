import { IChatUsers } from "../../interfaces"

export interface UserListProps {
    className?: string,
    id?: number,
    users?: IChatUsers[],
    deleteUser: (chatId: number, userId: number) => void,
    showChatUsers: () => void
}

