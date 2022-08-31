import AuthAPI from '../api/AuthAPI';
import { router } from '../utils/router';
import { errorHandler } from '../utils/errorHandler';
import { ISignIn } from '../pages/SignIn/interfaces';
import { ISignUp } from '../pages/SignUp/interfaces';
// import { Actions } from '../Store';

// import { store } from '../store';

class AuthController {
    public async signIn(user: ISignIn) {
        return AuthAPI.signIn(user)
            .then((response) => {
                // Actions.addText(response);
                console.log(response)
                router.go('/messenger');
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
            .then((reponse) => {
                console.log(reponse)
            })
    }

}

export default new AuthController();
