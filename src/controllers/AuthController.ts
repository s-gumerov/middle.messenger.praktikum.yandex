import AuthAPI from '../api/AuthApi';
import { router } from '../utils/router';
import { errorHandler } from '../utils/errorHandler';
import { ISignIn } from '../pages/SignIn/interfaces';
import { ISignUp } from '../pages/SignUp/interfaces';

// import { store } from '../store';

class AuthController {
    public async signIn(user: ISignIn) {
        return AuthAPI.signIn(user)
            .then(() => {
                router.go('/user');
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

}

export default new AuthController();
