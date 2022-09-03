export interface IChatMembersProps {
    userId: string,
    avatarPath: string,
    userName: string,
    deleteUser: (chatId: string, userId: string) => void
}

