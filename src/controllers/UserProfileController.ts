import UserProfileAPI from '../api/UserProfileAPI';
import { errorHandler } from '../utils/errorHandler';
import { IProfile } from '../pages/ProfileEdit/interfaces';
// import { store } from '../store';


class UserProfileController {
    // public search(data: IUserApiSearch) {
    //     return UserProfileAPI.search(data)
    //         .then((users) => {
    //             return users;
    //         })
    //         .catch(handleError);
    // }

    public updateProfile(data: IProfile) {
        return UserProfileAPI.updateProfile(data)
            .then((user) => {
                return user;
            })
            .catch(errorHandler)
    }

    public updateAvatar(data: FormData) {
        console.log(data)
        return UserProfileAPI.updateAvatar(data)
            .then((res) => {
                console.log(res)
                // store.setState({
                //     currentUser: user,
                // });
                // return user;
            })
            .catch(errorHandler)
    }
}

export default new UserProfileController();
