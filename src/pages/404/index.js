import * as styles from './styles.module.sass';
import Btn from '../../components/btn/btn';
import { NotFoundPage } from './NotFoundPage';

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

export const notFoundPage = new NotFoundPage(
    'div',
    {
        h1Msg: '404',
        spanMsg: 'Не туда попали',
        anchor: button
    });
