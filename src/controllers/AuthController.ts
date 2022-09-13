import AuthAPI from '../api/AuthAPI';
import ChatController from './ChatController';
import { router } from '../utils/router';
import { errorHandler } from '../utils/errorHandler';
import { ISignIn } from '../pages/SignIn/interfaces';
import { ISignUp } from '../pages/SignUp/interfaces';
import { Actions } from '../Store';

class AuthController {
    public async signIn(user: ISignIn) {
        return AuthAPI.signIn(user)
            .then(() => {
                this.checkAuth()
                    .then((response) => {
                        Actions.setProfile(response);
                        ChatController.request().then(() => {
                            router.go('/messenger');
                        }
                        )
                    })
            })
            .catch(errorHandler);
    }

    public async signUp(user: ISignUp) {
        return AuthAPI.signUp(user)
            .then(() => {
                router.go('/auth/signin');
            })
            .catch(errorHandler);
    }

    public async signOut() {
        return AuthAPI.signOut()
            .then(() => {
                router.go('/auth/signin');
            });
    }

    public async checkAuth() {
        return AuthAPI.checkAuth()
            .then((response) => {
                Actions.setProfile(response);
                return response;
            })
            .catch(() => router.go('/auth/signin'))
    }

}

export default new AuthController();
