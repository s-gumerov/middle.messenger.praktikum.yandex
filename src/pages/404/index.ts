import * as styles from './styles.module.sass';
import { Anchor } from '../../components/anchor/Anchor';
import { NotFoundPage } from './NotFoundPage';

const clickHandler = (e: Event) => {
    e.preventDefault();
    console.log(e.currentTarget)
};

const button = new Anchor(
    {
        anchorPath: '/sign-up',
        msg: 'Назад к чатам',
        className: styles.notFound__btn,
        clickHandler: clickHandler
    });

export const notFoundPage = new NotFoundPage(
    'div',
    {
        h1Msg: '404',
        spanMsg: 'Не туда попали',
        anchor: button,
        attr: {
            class: styles.container
        }
    });
