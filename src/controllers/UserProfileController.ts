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
        return UserProfileAPI.updatePassword(data)
            .then((user) => {
                router.go('/user');
                return user;
            })
            .catch(errorHandler)
    }

    public async updateProfile(data: IProfile) {
        return UserProfileAPI.updateProfile(data)
            .then((user) => {
                AuthController.checkAuth();
                router.go('/user');
                return user;
            })
            .catch(errorHandler)
    }

    public async updateAvatar(data: FormData) {
        return UserProfileAPI.updateAvatar(data)
            .then((user) => {
                AuthController.checkAuth();
                return user.avatar;
            })
            .catch(errorHandler)
    }

    public async findUserRequest(data: IFindUserRequest) {
        return UserProfileAPI.findUserRequest(data)
            .then((user) => {

                const chatId = Actions.getActiveChatState().id

                if (Array.isArray(user) && chatId) {
                    if (user.length < 1) {
                        alert('Пользователь не найден')
                    };
                    const userId = user[0].id;
                    const data: IChatApiAddUser = {
                        "users": [
                            userId
                        ],
                        "chatId": chatId
                    };

                    ChatController.addUserChat(data);
                }
            })
            .catch(errorHandler)
    }
}

export default new UserProfileController();
