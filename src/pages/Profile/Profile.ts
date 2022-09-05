import { Component } from '../../services/Component';
import { tpl } from './tpl';
import { v4 as makeUUID } from 'uuid';
import { Avatar } from '../../components/avatar/Avatar';
import { IAvatarProps } from '../../components/avatar/interfaces';
import { Anchor } from '../../components/anchor/Anchor';
import { inputAndLabel as inputAndLabelComponent } from '../../components/inputAndLabel';
import * as styles from './styles.module.sass';
import { InputAndLabelProps } from '../../components/inputAndLabel/interfaces';
import { defaultProfileValue } from '../../utils/defaultProfileValue';
import { router } from '../../utils/router';
import AuthController from '../../controllers/AuthController';
import env from '../../utils/env';

const avatarProps: IAvatarProps =
{
    alt: `${defaultProfileValue?.first_name}-аватар`,
    src: defaultProfileValue?.avatar ? `${env.HOST_RESOURCES}${defaultProfileValue?.avatar}` : 'https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg',
    figureClassName: styles.figure,
    imgClassName: styles.figure__img
};

const avatar = new Avatar(avatarProps);

let disabledInputs = true;

const emailInputProps: InputAndLabelProps =
{
    id: makeUUID() as string,
    name: 'email',
    type: 'email',
    placeholder: 'Почта',
    disabled: disabledInputs,
    value: defaultProfileValue?.email ?? '',
    containerClass: styles.inputs__item,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
};

const loginInputProps: InputAndLabelProps =
{
    id: makeUUID() as string,
    name: 'login',
    type: 'text',
    placeholder: 'Логин',
    disabled: disabledInputs,
    value: defaultProfileValue?.login ?? '',
    containerClass: styles.inputs__item,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
};

const firstNameInputProps: InputAndLabelProps =
{
    id: makeUUID() as string,
    name: 'first_name',
    type: 'text',
    placeholder: 'Имя',
    disabled: disabledInputs,
    value: defaultProfileValue?.first_name ?? '',
    containerClass: styles.inputs__item,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
};

const secondNameInputProps: InputAndLabelProps =
{
    id: makeUUID() as string,
    name: 'second_name',
    type: 'text',
    placeholder: 'Фамилия',
    disabled: disabledInputs,
    value: defaultProfileValue?.second_name ?? '',
    containerClass: styles.inputs__item,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
};

const displayNameProps: InputAndLabelProps =
{
    id: makeUUID() as string,
    name: 'display_name',
    type: 'text',
    placeholder: 'Имя в чате',
    disabled: disabledInputs,
    value: defaultProfileValue?.display_name ?? '',
    containerClass: styles.inputs__item,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
};

const phoneInputProps: InputAndLabelProps =
{
    id: makeUUID() as string,
    name: 'phone',
    type: 'text',
    placeholder: 'Телефон',
    disabled: disabledInputs,
    value: defaultProfileValue?.phone ?? '',
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

const editProfileAnchor = new Anchor(
    {
        anchorPath: '/user/profile',
        msg: 'Изменить данные',
        className: styles.btns__anchor,
        clickHandler: (e: Event) => {
            e.preventDefault();
            router.go('/user/profile')
        }
    }
);

const changePasswordAnchor = new Anchor(
    {
        anchorPath: '/user/password',
        msg: 'Изменить пароль',
        className: styles.btns__anchor,
        clickHandler: (e: Event) => {
            e.preventDefault();
            router.go('/user/password')
        }
    }
);

const goToChatAnchor = new Anchor(
    {
        anchorPath: '/auth/logout',
        msg: 'Выйти',
        className: styles.btns__anchor_red,
        clickHandler: (e: Event) => {
            e.preventDefault();
            AuthController.signOut();
        }
    }
);

export class Profile extends Component {
    constructor() {
        super(
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
                editProfileAnchor: editProfileAnchor,
                changePasswordAnchor: changePasswordAnchor,
                goToChatAnchor: goToChatAnchor

            }
        )
    }
    render() {
        return this.compile(tpl);
    }
}