import styles from './styles.module.sass';
import NotFoundPageTmpl from './notFound.hbs';
import { Btn } from '../../components/button/button';

const btnProps =
{
    anchorPath: '/sign-up',
    msg: 'Назад к чатам',
    className: styles.notFound__btn
};


const props = {
    h1Msg: '404',
    spanMsg: 'Не туда попали',
    anchor: Btn(btnProps)
};

export const NotFoundPage = NotFoundPageTmpl({ ...styles, ...props });