import IndexLayout from './layout/index';
import * as styles from './app.module.sass';
import { signIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp/SignUp';
import { Chat } from './pages/Chat/Chat';
import { Profile } from './pages/Profile/Profile';
import { ProfileEdit } from './pages/ProfileEdit/ProfileEdit';
import { ChangePassword } from './pages/ChangePassword/ChangePassword';
import { notFoundPage } from './pages/404';
import { serverErrorPage } from './pages/500';
import { render as renderDom } from './utils/render';

const routes = {
    '/': signIn,
    '/sign-in': signIn,
    '/sign-up': SignUp,
    '/chat': Chat,
    '/profile': Profile,
    '/profile/edit': ProfileEdit,
    '/profile/change-password': ChangePassword,
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
