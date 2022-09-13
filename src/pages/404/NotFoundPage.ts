import { Component } from '../../services/Component';
import { tpl } from './tpl';
import { router } from '../../utils/router';
import * as styles from './styles.module.sass';
import { Anchor } from '../../components/anchor/Anchor';

const button = new Anchor(
    {
        anchorPath: '/messenger',
        msg: 'Назад к чатам',
        className: styles.notFound__btn,
        clickHandler: (e: Event) => {
            e.preventDefault();
            router.go("/messenger");
        }
    });

export class NotFoundPage extends Component {
    constructor() {
        super('div',
            {
                h1Msg: '404',
                spanMsg: 'Не туда попали',
                anchor: button,
                attr: {
                    class: styles.container
                }
            }
        );
    }

    render() {
        return this.compile(tpl);
    }
};
