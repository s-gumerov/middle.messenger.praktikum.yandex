import { v4 as makeUUID } from 'uuid';
import { ProfileEdit } from './ProfileEdit';
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

const emailInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'email',
    type: 'email',
    placeholder: 'Почта',
    disabled: disabledInputs,
    value: 'pochta@yandex.ru',
    containerClass: styles.inputs__item,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
};

const loginInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'login',
    type: 'text',
    placeholder: 'Логин',
    disabled: disabledInputs,
    value: 'ivanivanov',
    containerClass: styles.inputs__item,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
};

const firstNameInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'first_name',
    type: 'text',
    placeholder: 'Имя',
    disabled: disabledInputs,
    value: 'Иван',
    containerClass: styles.inputs__item,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
};

const secondNameInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'second_name',
    type: 'text',
    placeholder: 'Фамилия',
    disabled: disabledInputs,
    value: 'Иванов',
    containerClass: styles.inputs__item,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
};

const displayNameProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'display_name',
    type: 'text',
    placeholder: 'Имя в чате',
    disabled: disabledInputs,
    value: 'Иван',
    containerClass: styles.inputs__item,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
};

const phoneInputProps: InputAndLabelProps = {
    id: makeUUID() as string,
    name: 'phone',
    type: 'text',
    placeholder: 'Телефон',
    disabled: disabledInputs,
    value: '+7(909)9673030',
    containerClass: styles.inputs__item,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
};



const emailInput = inputAndLabelComponent(emailInputProps);

const loginInput = inputAndLabelComponent(loginInputProps);

const firstNameInput = inputAndLabelComponent(firstNameInputProps);

const secondNameInput = inputAndLabelComponent(secondNameInputProps);

const displayNameInput = inputAndLabelComponent(displayNameProps);

const phoneInput = inputAndLabelComponent(phoneInputProps);


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

export const profileEdit = new ProfileEdit(
    'article',
    {
        attr: {
            class: styles.container
        },
        avatar: avatar,
        emailInput: emailInput,
        loginInput: loginInput,
        firstNameInput: firstNameInput,
        secondNameInput: secondNameInput,
        displayNameInput: displayNameInput,
        phoneInput: phoneInput,
        anchorToProfile: anchorToProfile,
        saveBtn: saveBtn
        // events: {
        //     "submit": submitHandler,
        // }
    });
