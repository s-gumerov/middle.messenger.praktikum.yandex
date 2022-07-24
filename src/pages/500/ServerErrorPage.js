import * as styles from './styles.module.sass';
import ServerErrorTmpl from './serverError.hbs';
import { Btn } from '../../components/button/button';

const btnProps =
{
    anchorPath: '/sign-up',
    msg: 'Назад к чатам',
    className: styles.notFound__btn
};


const props = {
    h1Msg: '500',
    spanMsg: 'Мы уже фиксим',
    anchor: Btn(btnProps)
};

export const ServerErrorPage = ServerErrorTmpl({ ...styles, ...props });