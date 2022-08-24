import { v4 as makeUUID } from 'uuid';
import { ProfileEdit } from './ProfileEdit';
import { Avatar } from '../../components/avatar/Avatar';
import { IAvatarProps } from '../../components/avatar/interfaces';
import { Btn } from '../../components/btn/Btn';
import { Anchor } from '../../components/anchor/Anchor';
import { inputAndLabel as inputAndLabelComponent } from '../../components/inputAndLabel';
import * as styles from './styles.module.sass';
import { InputAndLabelProps } from '../../components/inputAndLabel/interfaces';
import { FIRST_NAME_AND_SECOND_NAME_INPUT_TITLE, EMAIL_INPUT_TITLE, LOGIN_INPUT_TITLE, DISPLAY_NAME_INPUT_TITLE, PHONE_INPUT_TITLE } from '../../utils/inputTitleMsg';
import { FIRST_NAME_AND_SECOND_NAME_INPUT_TITLE_REGEXP, EMAIL_REGEXP, LOGIN_REGEXP, DISPLAY_NAME_REGEXP, PHONE_REGEXP } from '../../utils/regularExpressions';
import { setSubmitBtnDisabled } from '../../utils/setSubmitBtnDisabled';
import { setCompletedFieldsState } from '../../utils/setCompletedFieldsState';
import { validate } from '../../utils/validate';
import { inputCheckToForm } from '../../utils/inputCheckToForm';
import { setImgSrc } from '../../utils/setImgSrc';

const completedFields = {
    email: false,
    login: false,
    first_name: false,
    second_name: false,
    display_name: false,
    phone: false,
};

const focusHandler = (e: Event) => {
    const { value, name } = e.target as HTMLInputElement;
    const fieldCompleted = validate(name, value);
    setCompletedFieldsState(completedFields, name, fieldCompleted);
    inputCheckToForm(styles.container, completedFields);
};

const inputHandler = (e: Event) => {
    const { value, name } = e.target as HTMLInputElement;
    const fieldCompleted = validate(name, value);
    setCompletedFieldsState(completedFields, name, fieldCompleted);

    //проверяем все поля на форме для контроля disabled кнопки
    setSubmitBtnDisabled(styles.form__btn, completedFields);
};

const blurHandler = (e: Event) => {
    const { value, name } = e.target as HTMLInputElement;
    const fieldCompleted = validate(name, value);
    setCompletedFieldsState(completedFields, name, fieldCompleted);
};



const changeAvatar = (e: Event) => {
    const img = document.querySelector(`.${styles.figure__img}`) as HTMLImageElement;
    const input = e.target as HTMLInputElement;
    const file = input.files?.item(0);

    if (file) {
        setImgSrc(img, file);
    }

};


const submitHandler = (e: Event) => {
    e.preventDefault();
    const
        {
            email,
            login,
            first_name,
            second_name,
            display_name,
            phone
        } = e.target as HTMLFormElement;

    console.log({
        email: email.value,
        login: login.value,
        first_name: first_name.value,
        second_name: second_name.value,
        display_name: display_name.value,
        phone: phone.value,
    })
};

const avatarUploadProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'avatarUpload',
    type: 'file',
    placeholder: 'Поменять аватар',
    disabled: false,
    value: '',
    accept: ".jpg, .jpeg, .png",
    multiple: false,
    containerClass: styles.avatar,
    inputClassName: styles.avatar__uploadInput,
    labelClassName: styles.avatar__uploadIabel,
    changeHandler: changeAvatar

};


const avatarUpload = inputAndLabelComponent(avatarUploadProps)

const avatarProps: IAvatarProps =
{
    alt: 'автар',
    src: 'https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg',
    figureClassName: styles.figure,
    imgClassName: styles.figure__img,
};

const avatar = new Avatar(avatarProps);

let disabledInputs = false;

const emailInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'email',
    type: 'email',
    placeholder: 'Почта',
    disabled: disabledInputs,
    value: 'pochta@yandex.ru',
    title: EMAIL_INPUT_TITLE,
    pattern: `${EMAIL_REGEXP}`,
    required: true,
    containerClass: styles.inputs__item,
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
    disabled: disabledInputs,
    value: 'ivanivanov',
    title: LOGIN_INPUT_TITLE,
    pattern: `${LOGIN_REGEXP}`,
    required: true,
    containerClass: styles.inputs__item,
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
    disabled: disabledInputs,
    value: 'Иван',
    title: FIRST_NAME_AND_SECOND_NAME_INPUT_TITLE,
    pattern: `${FIRST_NAME_AND_SECOND_NAME_INPUT_TITLE_REGEXP}`,
    required: true,
    containerClass: styles.inputs__item,
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
    disabled: disabledInputs,
    value: 'Иванов',
    title: FIRST_NAME_AND_SECOND_NAME_INPUT_TITLE,
    pattern: `${FIRST_NAME_AND_SECOND_NAME_INPUT_TITLE_REGEXP}`,
    required: true,
    containerClass: styles.inputs__item,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    focusHandler: focusHandler,
    blurHandler: blurHandler,
    inputHandler: inputHandler
};

const displayNameProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'display_name',
    type: 'text',
    placeholder: 'Имя в чате',
    disabled: disabledInputs,
    value: 'Иван',
    title: DISPLAY_NAME_INPUT_TITLE,
    pattern: `${DISPLAY_NAME_REGEXP}`,
    required: true,
    containerClass: styles.inputs__item,
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
    disabled: disabledInputs,
    value: '+79099673030',
    title: PHONE_INPUT_TITLE,
    pattern: `${PHONE_REGEXP}`,
    required: true,
    containerClass: styles.inputs__item,
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

const displayNameInput = inputAndLabelComponent(displayNameProps);

const phoneInput = inputAndLabelComponent(phoneInputProps);


const anchorToProfile = new Anchor(
    {
        anchorPath: '/messenger',
        msg: '',
        className: styles.anchorToProfile
    }
);

const saveBtn = new Btn(
    {
        btnType: 'submit',
        msg: 'Сохранить',
        className: styles.form__btn,
        disabled: false
    }
);

export const profileEdit = new ProfileEdit(
    'form',
    {
        attr: {
            class: styles.container
        },
        avatar: avatar,
        avatarUpload: avatarUpload,
        emailInput: emailInput,
        loginInput: loginInput,
        firstNameInput: firstNameInput,
        secondNameInput: secondNameInput,
        displayNameInput: displayNameInput,
        phoneInput: phoneInput,
        anchorToProfile: anchorToProfile,
        saveBtn: saveBtn,
        events: {
            "submit": submitHandler,
        }
    });
