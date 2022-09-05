import { IChatUsers } from "../../interfaces"

export interface UserListProps {
    className?: string,
    id?: number,
    users?: IChatUsers[],
    deleteUser: (chatId: string, userId: string) => void,
    showChatUsers: () => void
}

