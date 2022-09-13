import ChatController from "../controllers/ChatController";

export const deleteUser = (chatId: number, userId: number) => {
    const data =
    {
        users: [userId],
        chatId: chatId

    };
    ChatController.deleteUserChat(data);
}

