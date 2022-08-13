import { v4 as makeUUID } from 'uuid';
import { ChangePassword } from './ChangePassword';
import { avatar as avatarComponent } from '../../components/avatar';
import { IAvatarProps } from '../../components/avatar/interfaces';
import { btn as btnComponent } from '../../components/btn';
import { inputAndLabel as inputAndLabelComponent } from '../../components/inputAndLabel';
import * as styles from './styles.module.sass';
import { InputAndLabelProps } from '../../components/inputAndLabel/interfaces';


const avatarProps: IAvatarProps =
{
    alt: 'автар',
    src: 'https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg',
    figureClassName: styles.figure,
    imgClassName: styles.figure__img
};

const avatar = avatarComponent(avatarProps);

let disabledInputs = false;

const oldPasswordInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'old_password',
    type: 'password',
    placeholder: 'Старый пароль',
    disabled: disabledInputs,
    value: '12345678',
    containerClass: styles.inputs__item,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
};

const newPasswordInputNameProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'new_password',
    type: 'password',
    placeholder: 'Новый пароль',
    disabled: disabledInputs,
    value: '12345678',
    containerClass: styles.inputs__item,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
};

const againNewPasswordInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'again_new_password',
    type: 'password',
    placeholder: 'Повторите новый пароль',
    disabled: disabledInputs,
    value: '12345678',
    containerClass: styles.inputs__item,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
};




const oldPasswordInput = inputAndLabelComponent(oldPasswordInputProps);

const newPasswordInputName = inputAndLabelComponent(newPasswordInputNameProps);

const againNewPasswordInput = inputAndLabelComponent(againNewPasswordInputProps);


const anchorToProfile = btnComponent(
    {
        anchorPath: '/chat',
        msg: '',
        className: styles.anchorToProfile
    }
);


const saveBtn = btnComponent(
    {
        anchorPath: '/profile',
        msg: 'Сохранить',
        className: styles.form__btn
    }
);

export const changePassword = new ChangePassword(
    'article',
    {
        attr: {
            class: styles.container
        },
        avatar: avatar,
        oldPasswordInput: oldPasswordInput,
        newPasswordInputName: newPasswordInputName,
        againNewPasswordInput: againNewPasswordInput,
        anchorToProfile: anchorToProfile,
        saveBtn: saveBtn
        // events: {
        //     "submit": submitHandler,
        // }
    });
