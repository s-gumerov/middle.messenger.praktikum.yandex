import * as styles from './styles.module.sass';
import { btn as btnComponent } from '../../components/btn';

import { ServerErrorPage } from './serverErrorPage';

const clickHandler = (e: Event) => {
    e.preventDefault();
    console.log(e.currentTarget)
};

const button = btnComponent(
    {
        anchorPath: '/sign-up',
        msg: 'Назад к чатам',
        className: styles.notFound__btn,
        clickHandler: clickHandler
    });

export const serverErrorPage = new ServerErrorPage(
    'div',
    {
        h1Msg: '500',
        spanMsg: 'Мы уже фиксим',
        anchor: button,
        attr: {
            class: styles.container
        }
    });