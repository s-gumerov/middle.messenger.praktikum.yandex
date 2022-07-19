import signUpStyles from './signUp.module.sass';
import SignUpTmpl from './signUp.hbs';
import { BtnsGroup } from '../../components/buttonsGroup/BtnsGroup';

const btnsGroupProps = {
    btnMsg: 'Зарегистрироваться',
    anchorMsg: 'Войти',
    anchorPath: '/sign-in'
};

const btns = {
    btnsGroup: BtnsGroup(btnsGroupProps)
};

export const SignUp = SignUpTmpl({ ...signUpStyles, ...btns });
