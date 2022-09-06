export interface IChatMembersProps {
    userId: string,
    avatarPath: string,
    userName: string,
    deleteUser: (chatId: number, userId: number) => void
}

