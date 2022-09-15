import { Component } from '../../services/Component';
import { tpl } from './tpl';
import { v4 as makeUUID } from 'uuid';
import { Btn } from '../../components/btn/Btn';
import { Anchor } from '../../components/anchor/Anchor';
import { InputAndLabel } from '../../components/inputAndLabel/InputAndLabel';
import * as styles from './styles.module.sass';
import { InputAndLabelProps } from '../../components/inputAndLabel/interfaces';
import { FIRST_NAME_AND_SECOND_NAME_INPUT_TITLE, EMAIL_INPUT_TITLE, LOGIN_INPUT_TITLE, PASSWORD_INPUT_TITLE, PHONE_INPUT_TITLE } from '../../utils/inputTitleMsg';
import { FIRST_NAME_AND_SECOND_NAME_INPUT_TITLE_REGEXP, EMAIL_REGEXP, LOGIN_REGEXP, PASSWORD_REGEXP, PHONE_REGEXP } from '../../utils/regularExpressions';
import { setSubmitBtnDisabled } from '../../utils/setSubmitBtnDisabled';
import { validate } from '../../utils/validate';
import { setCompletedFieldsState } from '../../utils/setCompletedFieldsState';
import { inputCheckToForm } from '../../utils/inputCheckToForm';
import { router } from '../../utils/router';
import { ISignUp } from './interfaces';
import AuthController from '../../controllers/AuthController';


const completedFields = {
    email: false,
    login: false,
    first_name: false,
    second_name: false,
    phone: false,
    password: false,
    again_password: false
};


const focusHandler = (e: Event) => {
    const { value, name } = e.target as HTMLInputElement;
    const fieldCompleted = validate(name, value);
    setCompletedFieldsState(completedFields, name, fieldCompleted);
    inputCheckToForm(styles.form, completedFields);
};

const inputHandler = (e: Event) => {
    const { value, name } = e.target as HTMLInputElement;
    const fieldCompleted = validate(name, value);
    setCompletedFieldsState(completedFields, name, fieldCompleted);

    //проверяем все поля на форме для контроля disabled кнопки
    setSubmitBtnDisabled(styles.btns__btn, completedFields);
};

const blurHandler = (e: Event) => {
    const { value, name } = e.target as HTMLInputElement;
    const fieldCompleted = validate(name, value);
    setCompletedFieldsState(completedFields, name, fieldCompleted);
};

const submitHandler = (e: Event) => {
    e.preventDefault();
    const
        {
            email,
            login,
            first_name,
            second_name,
            phone,
            password,
        } = e.target as HTMLFormElement;

    const data: ISignUp = {
        first_name: first_name.value,
        second_name: second_name.value,
        login: login.value,
        email: email.value,
        password: password.value,
        phone: phone.value,
    }
    AuthController.signUp(data);
};

const emailInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'email',
    type: 'email',
    placeholder: 'Почта',
    disabled: false,
    value: 'pochta@yandex.ru',
    title: EMAIL_INPUT_TITLE,
    pattern: `${EMAIL_REGEXP}`,
    required: true,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    focusHandler: focusHandler,
    blurHandler: blurHandler,
    inputHandler: inputHandler
};

const loginInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'login',
    type: 'text',
    placeholder: 'Логин',
    disabled: false,
    value: 'IvanovII',
    title: LOGIN_INPUT_TITLE,
    pattern: `${LOGIN_REGEXP}`,
    required: true,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    focusHandler: focusHandler,
    blurHandler: blurHandler,
    inputHandler: inputHandler
};

const firstNameInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'first_name',
    type: 'text',
    placeholder: 'Имя',
    disabled: false,
    value: 'Иванов',
    title: FIRST_NAME_AND_SECOND_NAME_INPUT_TITLE,
    pattern: `${FIRST_NAME_AND_SECOND_NAME_INPUT_TITLE_REGEXP}`,
    required: true,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    focusHandler: focusHandler,
    blurHandler: blurHandler,
    inputHandler: inputHandler
};

const secondNameInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'second_name',
    type: 'text',
    placeholder: 'Фамилия',
    disabled: false,
    value: 'Иванов',
    title: FIRST_NAME_AND_SECOND_NAME_INPUT_TITLE,
    pattern: `${FIRST_NAME_AND_SECOND_NAME_INPUT_TITLE_REGEXP}`,
    required: true,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    focusHandler: focusHandler,
    blurHandler: blurHandler,
    inputHandler: inputHandler
};

const phoneInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'phone',
    type: 'text',
    placeholder: 'Телефон',
    disabled: false,
    value: '89095555555',
    title: PHONE_INPUT_TITLE,
    pattern: `${PHONE_REGEXP}`,
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
    value: 'ivanivanov1P',
    title: PASSWORD_INPUT_TITLE,
    pattern: `${PASSWORD_REGEXP}`,
    required: true,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    focusHandler: focusHandler,
    blurHandler: blurHandler,
    inputHandler: inputHandler
};

const againPasswordInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'again_password',
    type: 'password',
    placeholder: 'Пароль',
    disabled: false,
    value: 'ivanivanov1P',
    title: PASSWORD_INPUT_TITLE,
    pattern: `${PASSWORD_REGEXP}`,
    required: true,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    focusHandler: focusHandler,
    blurHandler: blurHandler,
    inputHandler: inputHandler
};

const emailInput = new InputAndLabel(emailInputProps);

const loginInput = new InputAndLabel(loginInputProps);

const firstNameInput = new InputAndLabel(firstNameInputProps);

const secondNameInput = new InputAndLabel(secondNameInputProps);

const phoneInput = new InputAndLabel(phoneInputProps);

const passwordInput = new InputAndLabel(passwordInputProps);

const againPasswordInput = new InputAndLabel(againPasswordInputProps);

const signUpBtn = new Btn(
    {
        btnType: 'submit',
        msg: 'Зарегистрироваться',
        className: styles.btns__btn,
        disabled: false
    }
);

const signInAnchor = new Anchor(
    {
        anchorPath: '/auth/signin',
        msg: 'Войти',
        className: styles.btns__anchor,
        clickHandler: (e: Event) => {
            e.preventDefault();
            router.go("/auth/signin")
        }
    }
);

export class SignUp extends Component {
    constructor() {
        super(
            'form',
            {
                attr: {
                    class: styles.form
                },
                emailInput: emailInput,
                loginInput: loginInput,
                firstNameInput: firstNameInput,
                secondNameInput: secondNameInput,
                phoneInput: phoneInput,
                passwordInput: passwordInput,
                againPasswordInput: againPasswordInput,
                signUpBtn: signUpBtn,
                signInAnchor: signInAnchor,
                events: {
                    "submit": submitHandler,
                }
            }
        )
    }
    render() {
        return this.compile(tpl);
    }
}
