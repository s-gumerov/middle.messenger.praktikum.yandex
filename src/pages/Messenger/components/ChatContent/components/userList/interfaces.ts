import { IChatUsers } from "../../interfaces"

export interface UserListProps {
    id: number,
    users: IChatUsers[],
    deleteUser: (chatId: string, userId: string) => void
}

