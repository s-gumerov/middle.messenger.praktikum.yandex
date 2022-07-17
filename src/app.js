import appStyles from './app.module.sass';
const Handlebars = require("handlebars");
import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';

const routes = {
    '/sign-in': SignIn,
    '/sign-up': SignUp,
};

const appProps = { containerStyle: appStyles.container, mainStyle: appStyles.main }

const AppTmpl = Handlebars.compile(`
    <div class={{containerStyle}}>
        <main class={{mainStyle}}>
            App
        </main>
    </div>
    `);

export const App = AppTmpl(appProps);

const path = window.location.pathname;

const root = document.getElementById('root');

// root.innerHTML = App
Object.keys(routes).find(page => page === path) ? root.innerHTML = routes[path] : App;
