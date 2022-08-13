import IndexLayout from './layout/index';
import * as styles from './app.module.sass';
import { signIn } from './pages/SignIn';
import { signUp } from './pages/SignUp';
import { chat } from './pages/Chat';
import { profile } from './pages/Profile';
import { profileEdit } from './pages/ProfileEdit';
import { changePassword } from './pages/ChangePassword';
import { notFoundPage } from './pages/404';
import { serverErrorPage } from './pages/500';
import { render as renderDom } from './utils/render';

const routes = {
    '/': signIn,
    '/sign-in': signIn,
    '/sign-up': signUp,
    '/chat': chat,
    '/profile': profile,
    '/profile/edit': profileEdit,
    '/profile/change-password': changePassword,
    '/404': notFoundPage,
    '/500': serverErrorPage,
};

const path = window.location.pathname;

Object.keys(routes)
    .find(page => page === path) ?
    renderDom('root',
        new IndexLayout(
            "div", {
            attr: {
                class: styles.app
            },
            page: routes[path]
        }
        ))
    :
    notFoundPage;
