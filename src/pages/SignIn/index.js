import { v4 as makeUUID } from 'uuid';
import { SignIn } from './SignIn';
import { btn as btnComponent } from '../../components/btn';
import { inputAndLabel as inputAndLabelComponent } from '../../components/inputAndLabel';
import * as styles from './styles.module.sass';



/* 
login — от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание).

*/

const loginInputTitle = 'от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)'



const inputHandler = (e) => {
    const { value, name } = e.target;
    console.log(value, name, 'inputHandler');
    // if (name === 'login')

};

const changeHandler = (e) => {
    const { value, name } = e.target;
    console.log(value, name, 'changeHandler');
};

const focusHandler = (e) => {
    console.log('focusHandler')
};

const blurHandler = (e) => {
    console.log('blurHandler')
};

const submitHandler = (e) => {
    e.preventDefault();
    console.log('onsubmitHandler')
    console.log({
        login: e.target.elements.login.value,
        password: e.target.elements.password.value
    })
};

const loginInputProps = {
    id: makeUUID(),
    name: 'login',
    type: 'text',
    placeholder: 'Логин',
    disabled: false,
    value: '',
    pattern: "[a-z]{4,8}",
    title: loginInputTitle,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    // focusHandler: focusHandler,
    // blurHandler: blurHandler,
};

const passwordInputProps = {
    id: makeUUID(),
    name: 'password',
    type: 'password',
    placeholder: 'Пароль',
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    // focusHandler: focusHandler,
    // blurHandler: blurHandler,
};

const loginInput = inputAndLabelComponent(
    {
        props: loginInputProps
    }
);

const passwordInput = inputAndLabelComponent(
    {
        props: passwordInputProps
    }
);

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
            "change": changeHandler,
            "input": inputHandler,
        }
    });
