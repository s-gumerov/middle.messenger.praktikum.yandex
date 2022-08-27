import { BaseAPI } from './BaseApi';
import { IProfile } from '../pages/ProfileEdit/interfaces';

// import { IUserApiSearch, IUserApiUpdateProfile } from '../interfaces/IUserApi';

class UserProfileAPI extends BaseAPI {
    constructor() {
        super({ path: '/user' });
    }

    //   public search(data: IUserApiSearch) {
    //     return this.post('/search', {
    //       withCredentials: true,
    //       data: JSON.stringify(data),
    //     });
    //   }

    public updateProfile(data: IProfile) {
        return this.update('/profile', {
            withCredentials: true,
            data: data,
        });
    }

    public updateAvatar(data: FormData) {
        return this.update('/profile/avatar', {
            headers: {
                "accept": "application/json",
                "Content-Type": "multipart/form-data"
            },
            withCredentials: true,
            data,
        });
    }
}

export default new UserProfileAPI();
