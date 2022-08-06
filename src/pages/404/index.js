import * as styles from './styles.module.sass';
import Btn from '../../components/btn/btn';
import { NotFoundPage } from './NotFoundPage';

const button = new Btn(
    "div",
    {
        anchorPath: '/sign-up',
        msg: 'Назад к чатам',
        className: styles.notFound__btn,
        events: {
            click: e => {
                // e.preventDefault()
                const t = e.target;
                console.log(t)
            }
        }
    });

export const notFoundPage = new NotFoundPage(
    'div',
    {
        h1Msg: '404',
        spanMsg: 'Не туда попали',
        anchor: button
    });
