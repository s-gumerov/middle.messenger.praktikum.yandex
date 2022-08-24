import { Layout } from './layout/index';
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
    '/messenger': chat,
    '/settings': profile,
    '/profile/edit': profileEdit,
    '/settings/change-password': changePassword,
    '/404': notFoundPage,
    '/500': serverErrorPage,
};

const pageLoader = (routes: { [index: string]: any }, location: string) => {
    let loadPage = routes['/404'];

    for (let [page] of Object.entries(routes))
        if (page === location)
            loadPage = routes[page];

    return renderDom(
        'root',
        new Layout(
            "div", {
            attr: {
                class: styles.app
            },
            page: loadPage
        }
        ));
};

const location = window.location.pathname;

pageLoader(routes, location);
