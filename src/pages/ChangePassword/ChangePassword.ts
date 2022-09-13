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
import { PASSWORD_INPUT_TITLE } from '../../utils/inputTitleMsg';
import { PASSWORD_REGEXP } from '../../utils/regularExpressions';
import { setSubmitBtnDisabled } from '../../utils/setSubmitBtnDisabled';
import { setCompletedFieldsState } from '../../utils/setCompletedFieldsState';
import { validate } from '../../utils/validate';
import { inputCheckToForm } from '../../utils/inputCheckToForm';
import { IChangePassword } from './interfaces';
import { router } from '../../utils/router';
import env from '../../utils/env';
import UserProfileController from '../../controllers/UserProfileController';
import { Actions } from '../../Store';


const profile = Actions.getProfileState();

const completedFields = {
    old_password: false,
    new_password: false,
    again_password: false
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

const submitHandler = (e: Event) => {
    e.preventDefault();
    const { old_password, new_password } = e.target as HTMLFormElement;
    const data: IChangePassword =
    {
        oldPassword: old_password.value,
        newPassword: new_password.value,
    };

    UserProfileController.updatePassword(data);
};

const avatarProps: IAvatarProps =
{
    alt: `${profile?.first_name}-аватар`,
    src: profile?.avatar ? `${env.HOST_RESOURCES}${profile?.avatar}` : 'https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg',
    figureClassName: styles.figure,
    imgClassName: styles.figure__img
};

const avatar = new Avatar(avatarProps);

let disabledInputs = false;

const oldPasswordInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'old_password',
    type: 'password',
    placeholder: 'Старый_пароль',
    disabled: disabledInputs,
    value: 'ivanovII123',
    title: PASSWORD_INPUT_TITLE,
    pattern: `${PASSWORD_REGEXP}`,
    required: true,
    containerClass: styles.inputs__item,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    focusHandler: focusHandler,
    blurHandler: blurHandler,
    inputHandler: inputHandler
};

const newPasswordInputNameProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'new_password',
    type: 'password',
    placeholder: 'Новый_пароль',
    disabled: disabledInputs,
    value: 'ivanovII123',
    title: PASSWORD_INPUT_TITLE,
    pattern: `${PASSWORD_REGEXP}`,
    required: true,
    containerClass: styles.inputs__item,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    focusHandler: focusHandler,
    blurHandler: blurHandler,
    inputHandler: inputHandler
};

const againNewPasswordInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'again_password',
    type: 'password',
    placeholder: 'Повторите_новый_пароль',
    disabled: disabledInputs,
    value: 'ivanovII123',
    title: PASSWORD_INPUT_TITLE,
    pattern: `${PASSWORD_REGEXP}`,
    required: true,
    containerClass: styles.inputs__item,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
    focusHandler: focusHandler,
    blurHandler: blurHandler,
    inputHandler: inputHandler
};


const oldPasswordInput = inputAndLabelComponent(oldPasswordInputProps);

const newPasswordInputName = inputAndLabelComponent(newPasswordInputNameProps);

const againNewPasswordInput = inputAndLabelComponent(againNewPasswordInputProps);


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
        disabled: false
    }
);

export class ChangePassword extends Component {
    constructor() {
        super(
            'form',
            {
                attr: {
                    class: styles.container
                },
                avatar: avatar,
                oldPasswordInput: oldPasswordInput,
                newPasswordInputName: newPasswordInputName,
                againNewPasswordInput: againNewPasswordInput,
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