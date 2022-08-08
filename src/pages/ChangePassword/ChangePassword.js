import * as styles from './styles.module.sass';
import ChangePasswordTmpl from './changePassword.hbs';
import { Avatar } from '../../components/avatar/avatar';
import { Input } from '../../components/input/input';
import { Btn } from '../../components/btn/button';


const avatarProps =
{
    alt: 'автар',
    src: `https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg`,
    figureClassName: styles.figure,
    imgClassName: styles.figure__img
};

let changeDate = false;

const inputsProps = [
    {
        id: 'oldPassword',
        type: 'password',
        placeholder: 'Старый пароль',
        value: '12345678',
        disabled: changeDate,
    },

    {
        id: 'newPassword',
        type: 'password',
        placeholder: 'Новый пароль',
        value: '12345678',
        disabled: changeDate,
    },
    {
        id: 'againNewPassword',
        type: 'password',
        placeholder: 'Повторите новый пароль',
        value: '12345678',
        disabled: changeDate,
    },
];

const inputs = inputsProps.map((inp, index) => `
<div class=${styles.inputs__item}>
    <label id=label-${inp.id} for=${inp.id} class=${styles.item__label}>${inp.placeholder}</label> 
    ${Input({ ...inp, ...{ className: styles.item__input } })}
</div>
${inputsProps.length - 1 !== index ? `<div class=${styles.inputs__line}></div>` : ''}
        `).join('');

const btnProps =
{
    anchorPath: '/profile',
    msg: 'Сохранить',
    className: styles.form__btn
};

const anchor = Btn({
    anchorPath: '/chat',
    className: styles.anchorToProfile
});

const props = {
    anchor: anchor,
    avatar: Avatar(avatarProps),
    inputs: inputs,
    btnsGroup: Btn(btnProps),
};

export const ChangePassword = ChangePasswordTmpl({ ...styles, ...props });