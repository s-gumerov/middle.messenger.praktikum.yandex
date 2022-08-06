import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';
import { Chat } from './pages/Chat/Chat';
import { Profile } from './pages/Profile/Profile';
import { ProfileEdit } from './pages/ProfileEdit/ProfileEdit';
import { ChangePassword } from './pages/ChangePassword/ChangePassword';
import { NotFoundPage } from './pages/404/NotFoundPage';
import { ServerErrorPage } from './pages/500/ServerErrorPage';
import IndexLayout from './layout/index';
import Btn from './components/button/btn';
import { render as renderDom } from './utils/render';


const button = new Btn(
    "div",
    {
        name: 'btnName',
        events: {
            click: e => {
                const t = e.target;
                console.log(t)
            }

        }

    })

const routes = {
    '/': SignIn,
    '/sign-in': SignIn,
    '/sign-up': SignUp,
    '/chat': Chat,
    '/profile': Profile,
    '/profile/edit': ProfileEdit,
    '/profile/change-password': ChangePassword,
    '/404': NotFoundPage,
    '/500': ServerErrorPage,
    '/index': new IndexLayout(
        "div", {
        button: button
    }
    )
};

const path = window.location.pathname;

const app = document.querySelector('.app');

// Object.keys(routes).find(page => page === path) ? app.innerHTML = routes[path] : NotFoundPage;
Object.keys(routes).find(page => page === path) ? renderDom('.app', routes[path]) : NotFoundPage;



// const page = new IndexLayout(
    // "div"
// );

// renderDom('.app', page);

