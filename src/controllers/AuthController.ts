import AuthAPI from '../api/AuthAPI';
import ChatController from './ChatController';
import { router } from '../utils/router';
import { errorHandler } from '../utils/errorHandler';
import { ISignIn } from '../pages/SignIn/interfaces';
import { ISignUp } from '../pages/SignUp/interfaces';
import { Actions } from '../Store';

class AuthController {
    public async signIn(user: ISignIn) {
        try {
            await AuthAPI.signIn(user);
            await this.checkAuth();
            await ChatController.request();
            router.go('/messenger');
        } catch (error) {
            errorHandler(error);
        }
    }

    public async signUp(user: ISignUp) {
        try {
            await AuthAPI.signUp(user);
            await this.checkAuth();
            router.go('/auth/signin');
        } catch (error) {
            errorHandler(error);
        }
    }

    public async signOut() {
        try {
            await AuthAPI.signOut();
            window.localStorage.removeItem('myAppStore')
            router.go('/auth/signin');
        } catch (error) {
            errorHandler(error);
        }
    }

    public async checkAuth() {
        try {
            const checkAuthResponse = await AuthAPI.checkAuth();

            Actions.setProfile(checkAuthResponse);

        } catch (error) {
            errorHandler(error);
            router.go('/auth/signin');
        }
    }

}

export default new AuthController();
