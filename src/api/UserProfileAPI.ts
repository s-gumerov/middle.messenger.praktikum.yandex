import { BaseAPI } from './BaseApi';
import { IProfile } from '../pages/ProfileEdit/interfaces';
import { IChangePassword } from '../pages/ChangePassword/interfaces';

class UserProfileAPI extends BaseAPI {
    constructor() {
        super({ path: '/user' });
    }

    public updatePassword(data: IChangePassword) {
        return this.update('/password', {
            withCredentials: true,
            data: data,
        });
    }

    public updateProfile(data: IProfile) {
        return this.update('/profile', {
            withCredentials: true,
            data: data,
        });
    }

    public updateAvatar(data: FormData) {
        return this.update('/profile/avatar', {
            headers: {},
            withCredentials: true,
            data,
        });
    }
}

export default new UserProfileAPI();
