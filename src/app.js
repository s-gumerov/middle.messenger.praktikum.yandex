import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';
import { Chat } from './pages/Chat/Chat';
import { Profile } from './pages/Profile/Profile';
import { ProfileEdit } from './pages/ProfileEdit/ProfileEdit';
import { ChangePassword } from './pages/ChangePassword/ChangePassword';
import { NotFoundPage } from './pages/404/NotFoundPage';
import { ServerErrorPage } from './pages/500/ServerErrorPage';

const routes = {
    '/sign-in': SignIn,
    '/sign-up': SignUp,
    '/chat': Chat,
    '/profile': Profile,
    '/profile/edit': ProfileEdit,
    '/profile/change-password': ChangePassword,
    '/404': NotFoundPage,
    '/500': ServerErrorPage
};

const path = window.location.pathname;

const root = document.getElementById('root');

Object.keys(routes).find(page => page === path) ? root.innerHTML = routes[path] : NotFoundPage;
