import signInStyles from './signIn.module.sass';
import SignInTmpl from './signIn.hbs';
import { BtnsGroup } from '../../components/buttonsGroup/BtnsGroup';

const btnsGroupProps = {
    btnMsg: 'Авторизоваться',
    anchorMsg: 'Нет аккаунта?',
    anchorPath: '/sign-up'
};

const btns = {
    btnsGroup: BtnsGroup(btnsGroupProps)
};

export const SignIn = SignInTmpl({ ...signInStyles, ...btns });