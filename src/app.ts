import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';
import { Chat } from './pages/Chat/Chat';
import { Profile } from './pages/Profile/Profile';
import { ProfileEdit } from './pages/ProfileEdit/ProfileEdit';
import { ChangePassword } from './pages/ChangePassword/ChangePassword';
import { NotFoundPage } from './pages/404/NotFoundPage';
import { ServerErrorPage } from './pages/500/ServerErrorPage';
import { router } from './utils/router';

router
    .use("/auth/signin", SignIn)
    .use("/auth/signup", SignUp)
    .use('/user', Profile)
    .use('/user/profile', ProfileEdit)
    .use('/user/password', ChangePassword)
    .use('/messenger', Chat)
    .use("/500", ServerErrorPage)
    .use("/404", NotFoundPage)
    .start();
