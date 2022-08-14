import { v4 as makeUUID } from 'uuid';
import { SignUp } from './SignUp';
import { btn as btnComponent } from '../../components/btn';
import { inputAndLabel as inputAndLabelComponent } from '../../components/inputAndLabel';
import * as styles from './styles.module.sass';
import { InputAndLabelProps } from '../../components/inputAndLabel/interfaces';
import { firstNameAndSecondName, emailInputTitle, loginInputTitle, passwordInputTitle, phoneInputTitle } from '../../utils/inputTitleMsg';
import { setSubmitBtnDisabled, checkingAllFields, validate, setComletedFieldsState } from '../../utils/helpers';


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
    const
        {
            email,
            login,
            first_name,
            second_name,
            phone,
            password,
            again_password
        } = e.target as HTMLFormElement;

    console.log({
        email: email.value,
        login: login.value,
        first_name: first_name.value,
        second_name: second_name.value,
        phone: phone.value,
        password: password.value,
        again_password: again_password.value
    })
};

const emailInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'email',
    type: 'email',
    placeholder: 'Почта',
    disabled: false,
    value: '',
    title: emailInputTitle,
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
    value: '',
    title: loginInputTitle,
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
    value: '',
    title: firstNameAndSecondName,
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
    value: '',
    title: firstNameAndSecondName,
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
    value: '',
    title: phoneInputTitle,
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

const againPasswordInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'again_password',
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

const emailInput = inputAndLabelComponent(emailInputProps);

const loginInput = inputAndLabelComponent(loginInputProps);

const firstNameInput = inputAndLabelComponent(firstNameInputProps);

const secondNameInput = inputAndLabelComponent(secondNameInputProps);

const phoneInput = inputAndLabelComponent(phoneInputProps);

const passwordInput = inputAndLabelComponent(passwordInputProps);

const againPasswordInput = inputAndLabelComponent(againPasswordInputProps);

const signUpBtn = btnComponent(
    {
        btnType: 'submit',
        msg: 'Зарегистрироваться',
        className: styles.btns__btn,
        disabled: true
    }
);

const signInAnchor = btnComponent(
    {
        anchorPath: '/sign-in',
        msg: 'Войти',
        className: styles.btns__anchor
    }
);

export const signUp = new SignUp(
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
    });
