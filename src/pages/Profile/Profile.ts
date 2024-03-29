import { Component, TProps } from '../../services/Component';
import { tpl } from './tpl';
import { v4 as makeUUID } from 'uuid';
import { Avatar } from '../../components/avatar/Avatar';
import { IAvatarProps } from '../../components/avatar/interfaces';
import { Anchor } from '../../components/anchor/Anchor';
import { InputAndLabel } from '../../components/inputAndLabel/InputAndLabel';
import styles from './styles.module.sass';
import { InputAndLabelProps } from '../../components/inputAndLabel/interfaces';
import { router } from '../../utils/router';
import AuthController from '../../controllers/AuthController';
import { env } from '../../utils/env';
import { Actions } from '../../Store';


const profile = Actions.getProfileState();

const avatarProps: IAvatarProps =
{
    alt: `${profile?.first_name}-аватар`,
    src: profile?.avatar ? `${env.HOST_RESOURCES}${profile?.avatar}` : 'https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg',
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
    value: profile?.email ?? '',
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
    value: profile?.login ?? '',
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
    value: profile?.first_name ?? '',
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
    value: profile?.second_name ?? '',
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
    value: profile?.display_name ?? '',
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
    value: profile?.phone ?? '',
    containerClass: styles.inputs__item,
    inputClassName: styles.item__input,
    labelClassName: styles.item__label,
};



const emailInput = new InputAndLabel(emailInputProps);

const loginInput = new InputAndLabel(loginInputProps);

const firstNameInput = new InputAndLabel(firstNameInputProps);

const secondNameInput = new InputAndLabel(secondNameInputProps);

const displayNameInput = new InputAndLabel(displayNameProps);

const phoneInput = new InputAndLabel(phoneInputProps);


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
                goToChatAnchor: goToChatAnchor,
            }
        )
    }
    render() {
        return this.compile(tpl);
    }
    public updatePropsForChilds(newProps: TProps) {

        if (!newProps) {
            return;
        };


        const { profile } = newProps;

        if (profile) { /* устанавливаем пропсы для для профиля пользователя  */
            Object.entries(this._children).forEach(([, properties]) => {
                if (properties instanceof Component) {

                    Object.entries(properties['_children']).forEach(([childName, childProperty]) => {

                        // ищем вложеннные инпуты чтобы обновить в них значение из стора
                        if (childName === 'input' && childProperty instanceof Component) {

                            Object.entries(profile).forEach(([storeProperty, storeValue]) => {
                                // storeProperty - название поля из стора, storeValue - значение
                                // childName - имя дочернего компонента, childProperty - свойства дочернего компонета 
                                console.log(childProperty['_props']['value']);

                                if (childProperty['_props']['name'] === storeProperty) {
                                    childProperty.setProps({ value: storeValue })
                                };
                            })
                        };
                    });
                };
            });
        };

    };
}