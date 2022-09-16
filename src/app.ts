
import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';
import { Messenger } from './pages/Messenger/Messenger';
import { Profile } from './pages/Profile/Profile';
import { ProfileEdit } from './pages/ProfileEdit/ProfileEdit';
import { ChangePassword } from './pages/ChangePassword/ChangePassword';
import { NotFoundPage } from './pages/404/NotFoundPage';
import { ServerErrorPage } from './pages/500/ServerErrorPage';
import { router } from './utils/router';
import { connect } from './Store/Connect';

const withUser = connect(state => ({
    profile: state.profile
}));

const withMessenger = connect(state => ({
    chatList: state.chatList,
    activeChat: state.activeChat,
    token: state.token,
    msg: state.msg,
}));

router
    .use("/", SignIn)
    .use("/auth/signin", SignIn)
    .use("/auth/signup", SignUp)
    .use('/user', withUser(Profile))
    .use('/user/profile', withUser(ProfileEdit))
    .use('/user/password', withUser(ChangePassword))
    .use('/messenger', withMessenger(Messenger))
    .use("/500", ServerErrorPage)
    .use("/404", NotFoundPage)
    .start();
