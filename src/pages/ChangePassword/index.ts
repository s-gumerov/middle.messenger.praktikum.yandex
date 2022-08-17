import { v4 as makeUUID } from 'uuid';
import { ChangePassword } from './ChangePassword';
import { Avatar } from '../../components/avatar/Avatar';
import { IAvatarProps } from '../../components/avatar/interfaces';
import { Btn } from '../../components/btn/Btn';
import { Anchor } from '../../components/anchor/Anchor';
import { inputAndLabel as inputAndLabelComponent } from '../../components/inputAndLabel';
import * as styles from './styles.module.sass';
import { InputAndLabelProps } from '../../components/inputAndLabel/interfaces';
import { PASSWORD_INPUT_TITLE } from '../../utils/inputTitleMsg';
import {PASSWORD_REGEXP} from '../../utils/regularExpressions';
import { setSubmitBtnDisabled } from '../../utils/setSubmitBtnDisabled';
import { setCompletedFieldsState } from '../../utils/setCompletedFieldsState';
import { validate } from '../../utils/validate';
import { inputCheckToForm } from '../../utils/inputCheckToForm';

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
    const { old_password, new_password, again_password } = e.target as HTMLFormElement;
    console.log({
        old_password: old_password.value,
        new_password: new_password.value,
        again_password: again_password.value
    })
};

const avatarProps: IAvatarProps =
{
    alt: 'автар',
    src: 'https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg',
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
    title:PASSWORD_INPUT_TITLE,
    pattern:`${PASSWORD_REGEXP}`,
    required:true,
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
    title:PASSWORD_INPUT_TITLE,
    pattern:`${PASSWORD_REGEXP}`,
    required:true,
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
    title:PASSWORD_INPUT_TITLE,
    pattern:`${PASSWORD_REGEXP}`,
    required:true,
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
        anchorPath: '/chat',
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

export const changePassword = new ChangePassword(
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
    });
