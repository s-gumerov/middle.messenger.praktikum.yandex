import Component from '../../services/Component';
import { tpl } from './tpl';
import { v4 as makeUUID } from 'uuid';
import { Btn } from '../../components/btn/Btn';
import { Anchor } from '../../components/anchor/Anchor';
import { inputAndLabel as inputAndLabelComponent } from '../../components/inputAndLabel';
import * as styles from './styles.module.sass';
import { InputAndLabelProps } from '../../components/inputAndLabel/interfaces';
import { LOGIN_INPUT_TITLE, PASSWORD_INPUT_TITLE } from '../../utils/inputTitleMsg';
import { LOGIN_REGEXP, PASSWORD_REGEXP } from '../../utils/regularExpressions';
import { setSubmitBtnDisabled } from '../../utils/setSubmitBtnDisabled';
import { validate } from '../../utils/validate';
import { setCompletedFieldsState } from '../../utils/setCompletedFieldsState';
import { inputCheckToForm } from '../../utils/inputCheckToForm';
import { router } from '../../utils/router';

const completedFields = {
    login: false,
    password: false
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
    value: 'ivanivanov',
    title: LOGIN_INPUT_TITLE,
    pattern: `${LOGIN_REGEXP}`,
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

const loginInput = inputAndLabelComponent(loginInputProps);

const passwordInput = inputAndLabelComponent(passwordInputProps);

const loginBtn = new Btn(
    {
        btnType: 'submit',
        msg: 'Авторизоваться',
        className: styles.btns__btn,
        disabled: false
    }
);

const signUpAnchor = new Anchor(
    {
        anchorPath: '/sign-up',
        msg: 'Нет аккаунта?',
        className: styles.btns__anchor,
        clickHandler: (e: Event) => {
            e.preventDefault();
            router.go("/sign-up");
        }
    }
);

export class SignIn extends Component {
    constructor() {
        super(
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
            }
        )
    }
    render() {
        return this.compile(tpl);
    }
}