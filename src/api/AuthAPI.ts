import { BaseAPI } from './BaseApi';
import { ISignIn } from '../pages/SignIn/interfaces';
import { ISignUp } from '../pages/SignUp/interfaces';

class AuthAPI extends BaseAPI {
    constructor() {
        super({ path: '/auth' });
    }

    public signIn(data: ISignIn) {
        console.log(data)
        return this.create('/signin',
            {
                withCredentials: true,
                data: data,
            }
        );
    }

    public signUp(data: ISignUp) {
        return this.create('/signup',
            {
                withCredentials: true,
                data: data,
            }
        );
    }

    public checkAuth() {
        return this.request('/user', {
            withCredentials: true,
        });
    }

    public signOut() {
        return this.create('/logout', {
            withCredentials: true,
        });
    }
}

export default new AuthAPI();
