import styles from './styles.module.sass';
import ProfileEditTmpl from './profileEdit.hbs';
import { Avatar } from '../../components/avatar/avatar';
import { Input } from '../../components/input/input';
import { Btn } from '../../components/button/button';


const avatarProps =
{
    alt: 'автар',
    src: 'https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg',
    figureClassName: styles.figure,
    imgClassName: styles.figure__img
};

let changeDate = false;

const inputsProps = [
    {
        id: 'email',
        type: 'email',
        placeholder: 'Почта',
        value: 'pochta@yandex.ru',
        disabled: changeDate,
    },
    {
        id: 'login',
        type: 'text',
        placeholder: 'Логин',
        value: 'ivanivanov',
        disabled: changeDate,
    },
    {
        id: 'first_name',
        type: 'text',
        placeholder: 'Имя',
        value: 'Иван',
        disabled: changeDate,
    },
    {
        id: 'second_name',
        type: 'text',
        placeholder: 'Фамилия',
        value: 'Иванов',
        disabled: changeDate,
    },
    {
        id: 'display_name',
        type: 'text',
        placeholder: 'Имя в чате',
        value: 'Иван',
        disabled: changeDate,
    },
    {
        id: 'phone',
        type: 'tel',
        placeholder: 'Телефон',
        value: '+7(909)9673030',
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

export const ProfileEdit = ProfileEditTmpl({ ...styles, ...props });