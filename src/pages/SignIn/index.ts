import { v4 as makeUUID } from 'uuid';
import { SignIn } from './SignIn';
import { btn as btnComponent } from '../../components/btn';
import { inputAndLabel as inputAndLabelComponent } from '../../components/inputAndLabel';
import * as styles from './styles.module.sass';
import { InputAndLabelProps } from '../../components/inputAndLabel/interfaces';
import { loginRegexp, passwordRegexp } from '../../utils/regularExpressions';
import { loginInputTitle, passwordInputTitle } from '../../utils/inputTitleMsg';


const validate = (value: string, name: string) => {
    if (name === 'login') {
        return console.log(value.match(loginRegexp))
    }
    if (name === 'password') {
        return console.log(value.match(passwordRegexp))
    }

};


const focusHandler = (e: Event) => {
    const { value, name } = e.target as HTMLInputElement;
    console.log(value, name, 'focusHandler')
    // validate(value, name)
};

const blurHandler = (e: Event) => {
    const { value, name } = e.target as HTMLInputElement;
    console.log(value, name, 'blurHandler')
    // validate(value, name)
};

const submitHandler = (e: Event) => {
    e.preventDefault();
    const { login, password } = e.target as HTMLFormElement;
    console.log({
        login: login.value,
        password: password.value
    })
};

const loginInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'login',
    type: 'text',
    placeholder: 'Логин',
    disabled: false,
    value: '',
    pattern: `${loginRegexp}`,
    title: loginInputTitle,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    focusHandler: focusHandler,
    blurHandler: blurHandler,
};

const passwordInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'password',
    type: 'password',
    placeholder: 'Пароль',
    disabled: false,
    value: '',
    // pattern: `${passwordRegexp}`,
    title: passwordInputTitle,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    focusHandler: focusHandler,
    blurHandler: blurHandler,
};

const loginInput = inputAndLabelComponent(loginInputProps);

const passwordInput = inputAndLabelComponent(passwordInputProps);

const loginBtn = btnComponent(
    {
        btnType: 'submit',
        msg: 'Авторизоваться',
        className: styles.btns__btn,
    }
);

const signUpAnchor = btnComponent(
    {
        anchorPath: '/sign-up',
        msg: 'Нет аккаунта?',
        className: styles.btns__anchor
    }
);

export const signIn = new SignIn(
    'form',
    {
        attr: {
            class: styles.form
        },
        loginInput: loginInput,
        passwordInput: passwordInput,
        loginBtn: loginBtn,
        signUpAnchor: signUpAnchor,
        events: {
            "focus": focusHandler,
            "blur": blurHandler,
            "submit": submitHandler,
        }
    });
