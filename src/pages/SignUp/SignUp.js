import styles from './styles.module.sass';
import SignUpTmpl from './signUp.hbs';
import { Btn } from '../../components/button/button';
import { Input } from '../../components/input/input';

const btnsProps = [
    {
        msg: 'Зарегистрироваться',
        className: styles.btns__btn
    },
    {
        anchorPath: '/sign-in',
        msg: 'Войти',
        className: styles.btns__anchor
    }
];

const inputsProps = [
    {
        id: 'email',
        type: 'email',
        placeholder: 'Почта'
    },
    {
        id: 'login',
        type: 'text',
        placeholder: 'Логин'
    },
    {
        id: 'first_name',
        type: 'text',
        placeholder: 'Имя'
    },
    {
        id: 'second_name',
        type: 'text',
        placeholder: 'Фамилия'
    },
    {
        id: 'phone',
        type: 'tel',
        placeholder: 'Телефон'
    },
    {
        id: 'password',
        type: 'password',
        placeholder: 'Пароль'
    },
    {
        id: 'againPassword',
        type: 'password',
        placeholder: 'Пароль еще раз'
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

export const SignUp = SignUpTmpl({ ...styles, ...props });