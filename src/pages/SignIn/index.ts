import { v4 as makeUUID } from 'uuid';
import { SignIn } from './SignIn';
import { Btn } from '../../components/btn/Btn';
import { Anchor } from '../../components/anchor/Anchor';
import { inputAndLabel as inputAndLabelComponent } from '../../components/inputAndLabel';
import * as styles from './styles.module.sass';
import { InputAndLabelProps } from '../../components/inputAndLabel/interfaces';
import { loginInputTitle, passwordInputTitle } from '../../utils/inputTitleMsg';
import { setSubmitBtnDisabled } from '../../utils/setSubmitBtnDisabled';
import { checkingAllFields } from '../../utils/checkingAllFields';
import { validateAndsetComletedFields } from '../../utils/validateAndsetComletedFields';

const completedFields = {
    login: false,
    password: false
};


const focusHandler = (e: Event) => {
    validateAndsetComletedFields(e.target as HTMLInputElement, completedFields);
};

const inputHandler = (e: Event) => {
    validateAndsetComletedFields(e.target as HTMLInputElement, completedFields);

    //проверяем все поля на форме и записываем результат boolean в state, чтобы передать его в disabled кнопки
    const state = checkingAllFields(completedFields);
    setSubmitBtnDisabled(styles.btns__btn, state);
};

const blurHandler = (e: Event) => {
    validateAndsetComletedFields(e.target as HTMLInputElement, completedFields);
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
    title: loginInputTitle,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    focusHandler: focusHandler,
    blurHandler: blurHandler,
    inputHandler: inputHandler
};

const passwordInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'password',
    type: 'password',
    placeholder: 'Пароль',
    disabled: false,
    value: '',
    title: passwordInputTitle,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    focusHandler: focusHandler,
    blurHandler: blurHandler,
    inputHandler: inputHandler
};

const loginInput = inputAndLabelComponent(loginInputProps);

const passwordInput = inputAndLabelComponent(passwordInputProps);

const loginBtn = new Btn(
    {
        btnType: 'submit',
        msg: 'Авторизоваться',
        className: styles.btns__btn,
        disabled: true
    }
);

const signUpAnchor = new Anchor(
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
            "submit": submitHandler,
        }
    });
