import { Component } from '../../services/Component';
import { tpl } from './tpl';
import { v4 as makeUUID } from 'uuid';
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
import { router } from '../../utils/router';
import UserProfileController from '../../controllers/UserProfileController';
import { IProfile } from './interfaces';
import env from '../../utils/env';
import { Actions } from '../../Store';


const profile = Actions.getProfileState();

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
    const avatar = input.files?.item(0);

    if (!avatar) {
        return
    };

    setImgSrc(img, avatar);
    const formData = new FormData();
    formData.append('avatar', avatar);
    UserProfileController.updateAvatar(formData);

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
            phone,
        } = e.target as HTMLFormElement;

    const data: IProfile =
    {
        email: email.value,
        login: login.value,
        first_name: first_name.value,
        second_name: second_name.value,
        display_name: display_name.value,
        phone: phone.value,
    };

    UserProfileController.updateProfile(data);
};

const avatarUploadProps: InputAndLabelProps =
{
    id: makeUUID() as string,
    name: 'avatar',
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
    alt: `${profile?.first_name}-аватар`,
    src: profile.avatar ? `${env.HOST_RESOURCES}${profile.avatar}` : 'https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg',
    figureClassName: styles.figure,
    imgClassName: styles.figure__img,
};

const avatar = new Avatar(avatarProps);

let disabledInputs = false;

const emailInputProps: InputAndLabelProps =
{
    id: makeUUID() as string,
    name: 'email',
    type: 'email',
    placeholder: 'Почта',
    disabled: disabledInputs,
    value: profile?.email ?? '',
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

const loginInputProps: InputAndLabelProps =
{
    id: makeUUID() as string,
    name: 'login',
    type: 'text',
    placeholder: 'Логин',
    disabled: disabledInputs,
    value: profile?.login ?? '',
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

const firstNameInputProps: InputAndLabelProps =
{
    id: makeUUID() as string,
    name: 'first_name',
    type: 'text',
    placeholder: 'Имя',
    disabled: disabledInputs,
    value: profile?.first_name ?? '',
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

const secondNameInputProps: InputAndLabelProps =
{
    id: makeUUID() as string,
    name: 'second_name',
    type: 'text',
    placeholder: 'Фамилия',
    disabled: disabledInputs,
    value: profile?.second_name ?? '',
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

const displayNameProps: InputAndLabelProps =
{
    id: makeUUID() as string,
    name: 'display_name',
    type: 'text',
    placeholder: 'Имя в чате',
    disabled: disabledInputs,
    value: profile?.display_name ?? '',
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

const phoneInputProps: InputAndLabelProps =
{
    id: makeUUID() as string,
    name: 'phone',
    type: 'text',
    placeholder: 'Телефон',
    disabled: disabledInputs,
    value: profile?.phone ?? '',
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
        className: styles.anchorToProfile,
        clickHandler: (e: Event) => {
            e.preventDefault();
            router.go('/messenger')
        }
    }
);

const saveBtn = new Btn(
    {
        btnType: 'submit',
        msg: 'Сохранить',
        className: styles.form__btn,
        disabled: false,
    }
);

export class ProfileEdit extends Component {
    constructor() {
        super(
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
            }
        )
    }

    render() {
        return this.compile(tpl);
    }
}
