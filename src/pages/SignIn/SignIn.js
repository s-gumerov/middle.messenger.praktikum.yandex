import styles from './styles.module.sass';
import SignInTmpl from './signIn.hbs';
import { Input } from '../../components/input/input';
import { Btn } from '../../components/button/button';

console.log(styles.item__input);


const btnsProps = [
    {
        msg: 'Авторизоваться',
        className: styles.btns__btn
    },
    {
        anchorPath: '/sign-up',
        msg: 'Нет аккаунта?',
        className: styles.btns__anchor
    }
];

const inputsProps = [
    {
        id: 'login',
        type: 'text',
        placeholder: 'Логин'
    },
    {
        id: 'password',
        type: 'password',
        placeholder: 'Пароль'
    }
];

const inputs = inputsProps.map(inp => `
<div class=${styles.inputs__item}>
    <label id=label-${inp.id} for=${inp.id} class=${styles.item__label}>${inp.placeholder}</label> 
    ${Input({ ...inp, ...{ className: styles.item__input } })}
</div>
`).join('');

const btnsGroup = btnsProps.map(btn => Btn(btn)).join('');

const props = {
    inputs: inputs,
    btnsGroup: btnsGroup
};

export const SignIn = SignInTmpl({ ...styles, ...props });