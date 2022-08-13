import { v4 as makeUUID } from 'uuid';
import { SignIn } from './SignIn';
import { btn as btnComponent } from '../../components/btn';
import { inputAndLabel as inputAndLabelComponent } from '../../components/inputAndLabel';
import * as styles from './styles.module.sass';
import { InputAndLabelProps } from '../../components/inputAndLabel/interfaces';
import { loginRegexp, passwordRegexp } from '../../utils/regularExpressions';
import { loginInputTitle, passwordInputTitle } from '../../utils/inputTitleMsg';
import { setSubmitBtnDisabled, checkingAllFields, validate, setComletedFieldsState } from '../../utils/helpers';

const completedFields = {
    login: false,
    password: false
};


const focusHandler = (e: Event) => {
    const { value, name } = e.target as HTMLInputElement;
    const fieldCompleted = validate(name, value);
    setComletedFieldsState(completedFields, name, fieldCompleted);
};

const inputHandler = (e: Event) => {
    const { value, name } = e.target as HTMLInputElement;
    const fieldCompleted = validate(name, value);
    setComletedFieldsState(completedFields, name, fieldCompleted);

    //проверяем все поля на форме и записываем результат boolean в state, чтобы передать его в disabled кнопки
    const state = checkingAllFields(completedFields);
    setSubmitBtnDisabled(styles.btns__btn, state);
};

const blurHandler = (e: Event) => {
    const { value, name } = e.target as HTMLInputElement;
    const fieldCompleted = validate(name, value);
    setComletedFieldsState(completedFields, name, fieldCompleted);
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
    required: true,
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
    pattern: `${passwordRegexp}`,
    title: passwordInputTitle,
    required: true,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    focusHandler: focusHandler,
    blurHandler: blurHandler,
    inputHandler: inputHandler
};

const loginInput = inputAndLabelComponent(loginInputProps);

const passwordInput = inputAndLabelComponent(passwordInputProps);

const loginBtn = btnComponent(
    {
        btnType: 'submit',
        msg: 'Авторизоваться',
        className: styles.btns__btn,
        disabled: true
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
            "submit": submitHandler,
        }
    });
