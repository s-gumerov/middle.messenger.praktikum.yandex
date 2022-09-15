import UserProfileAPI from '../api/UserProfileAPI';
import { errorHandler } from '../utils/errorHandler';
import { IProfile } from '../pages/ProfileEdit/interfaces';
import { IFindUserRequest } from '../pages/Messenger/components/ChatContent/interfaces';
import { IChangePassword } from '../pages/ChangePassword/interfaces';
import { router } from '../utils/router';
import AuthController from './AuthController';
import { IChatApiAddUser } from './ChatController';
import ChatController from './ChatController';
import { Actions } from '../Store';

class UserProfileController {

    public async updatePassword(data: IChangePassword) {
        try {
            await UserProfileAPI.updatePassword(data);
            router.go('/user');
        } catch (error) {
            errorHandler(error);
        }
    }

    public async updateProfile(data: IProfile) {
        try {
            await UserProfileAPI.updateProfile(data);
            await AuthController.checkAuth();
            router.go('/user');
        } catch (error) {
            errorHandler(error);
        }
    }

    public async updateAvatar(data: FormData) {
        try {
            await UserProfileAPI.updateAvatar(data);
            await AuthController.checkAuth();
        } catch (error) {
            errorHandler(error);
        }
    }

    public async findUserRequest(data: IFindUserRequest) {
        try {
            const userProfile = await UserProfileAPI.findUserRequest(data);
            const chatId = Actions.getActiveChatState().id

            if (Array.isArray(userProfile) && chatId) {
                if (userProfile.length < 1) {
                    alert('Пользователь не найден')
                };
                const userId = userProfile[0].id;
                const data: IChatApiAddUser = {
                    "users": [
                        userId
                    ],
                    "chatId": chatId
                };

                await ChatController.addUserChat(data);
            }
        } catch (error) {
            errorHandler(error);
        }
    }
}

export default new UserProfileController();
