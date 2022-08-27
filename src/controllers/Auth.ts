import AuthAPI from '../api/AuthApi';
import UserProfileAPI from '../api/UserProfileAPI';
import { router } from '../utils/router';
import { errorHandler } from '../utils/errorHandler';
import { ISignIn } from '../pages/SignIn/interfaces';
import { ISignUp } from '../pages/SignUp/interfaces';

// import { store } from '../store';

class AuthSingInController {
    public signIn(user: ISignIn) {
        return AuthAPI.signIn(user)
            .then(() => {
                router.go('/user');
            })
            .catch(errorHandler)

    }

    public signUp(user: ISignUp) {
        return AuthAPI.signUp(user)
            .then(() => {
                router.go('/auth/signin');
            })
            .catch(errorHandler)

    }

    public signOut() {
        return AuthAPI.signOut()
            .then(() => {
                localStorage.removeItem('last-select-chat-id');
                router.go('/auth/signup');
            });
    }

    // public checkAuth() {
    //     return authApi.checkAuth()
    //         .then((user) => {
    //             store.setState({
    //                 currentUser: user,
    //             });
    //         })
    //         .catch((error) => {
    //             handleError(error);
    //             router.go('/sign-in');
    //         });
    // }
}

export default new AuthSingInController();