import { v4 as makeUUID } from 'uuid';
import { SignUp } from './SignUp';
import { Btn } from '../../components/btn/Btn';
import { Anchor } from '../../components/anchor/Anchor';
import { inputAndLabel as inputAndLabelComponent } from '../../components/inputAndLabel';
import * as styles from './styles.module.sass';
import { InputAndLabelProps } from '../../components/inputAndLabel/interfaces';
import { firstNameAndSecondName, emailInputTitle, loginInputTitle, passwordInputTitle, phoneInputTitle } from '../../utils/inputTitleMsg';
import { setSubmitBtnDisabled } from '../../utils/setSubmitBtnDisabled';
import { validate } from '../../utils/validate';
import { setCompletedFieldsState } from '../../utils/setCompletedFieldsState';
import { inputCheckToForm } from '../../utils/inputCheckToForm';

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
    value: 'pochta@yandex.ru',
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
    value: 'IvanovII',
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
    value: 'Иванов',
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
    value: 'Иванов',
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
    value: '89095555555',
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
    value: 'ivanivanov1P',
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
    value: 'ivanivanov1P',
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
