import { v4 as makeUUID } from 'uuid';
import { SignUp } from './SignUp';
import { btn as btnComponent } from '../../components/btn';
import { inputAndLabel as inputAndLabelComponent } from '../../components/inputAndLabel';
import * as styles from './styles.module.sass';
import { InputAndLabelProps } from '../../components/inputAndLabel/interfaces';
import { loginRegexp, passwordRegexp } from '../../utils/regularExpressions';
import { firstNameAndSecondName, emailInputTitle, loginInputTitle, passwordInputTitle, phoneInputTitle } from '../../utils/inputTitleMsg';


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
    const { email, login, first_name, second_name, phone, password, again_password } = e.target as HTMLFormElement;
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
    // pattern: `${loginRegexp}`,
    title: emailInputTitle,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    focusHandler: focusHandler,
    blurHandler: blurHandler,
};

const loginInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'login',
    type: 'text',
    placeholder: 'Логин',
    disabled: false,
    value: '',
    pattern: loginRegexp,
    title: loginInputTitle,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    focusHandler: focusHandler,
    blurHandler: blurHandler,
};

const firstNameInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'first_name',
    type: 'text',
    placeholder: 'Имя',
    disabled: false,
    value: '',
    // pattern: `${loginRegexp}`,
    title: firstNameAndSecondName,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    focusHandler: focusHandler,
    blurHandler: blurHandler,
};

const secondNameInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'second_name',
    type: 'text',
    placeholder: 'Фамилия',
    disabled: false,
    value: '',
    // pattern: `${loginRegexp}`,
    title: firstNameAndSecondName,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    focusHandler: focusHandler,
    blurHandler: blurHandler,
};

const phoneInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'phone',
    type: 'text',
    placeholder: 'Телефон',
    disabled: false,
    value: '',
    // pattern: `${loginRegexp}`,
    title: phoneInputTitle,
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
    pattern: passwordRegexp,
    title: passwordInputTitle,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    focusHandler: focusHandler,
    blurHandler: blurHandler,
};

const againPasswordInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'again_password',
    type: 'password',
    placeholder: 'Пароль',
    disabled: false,
    value: '',
    pattern: passwordRegexp,
    title: passwordInputTitle,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    focusHandler: focusHandler,
    blurHandler: blurHandler,
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
            "focus": focusHandler,
            "blur": blurHandler,
            "submit": submitHandler,
        }
    });
