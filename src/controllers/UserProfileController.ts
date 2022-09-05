import UserProfileAPI from '../api/UserProfileAPI';
import { errorHandler } from '../utils/errorHandler';
import { IProfile } from '../pages/ProfileEdit/interfaces';
import { IChangePassword } from '../pages/ChangePassword/interfaces';
import { router } from '../utils/router';
import AuthController from './AuthController';
// import { store } from '../store';


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
                console.log(user)
                // store.setState({
                //     currentUser: user,
                // });
                return user.avatar;
            })
            .catch(errorHandler)
    }
}

export default new UserProfileController();
