import * as styles from './styles.module.sass';
import Btn from '../../components/btn/btn';
import { ServerErrorPage } from './serverErrorPage';

const clickHandler = (e) => {
    e.preventDefault();
    console.log(e.currentTarget)
};

const button = new Btn(
    "div",
    {
        anchorPath: '/sign-up',
        msg: 'Назад к чатам',
        className: styles.notFound__btn,
        events: {
            click: clickHandler
        }
    });

export const serverErrorPage = new ServerErrorPage(
    'div',
    {
        h1Msg: '500',
        spanMsg: 'Мы уже фиксим',
        anchor: button
    });
