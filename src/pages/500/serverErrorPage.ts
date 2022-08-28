import { Component } from '../../services/Component';
import { tpl } from './tpl';
import * as styles from './styles.module.sass';
import { Anchor } from '../../components/anchor/Anchor';
import { router } from '../../utils/router';

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

export class ServerErrorPage extends Component {
    constructor() {
        super('div',
            {
                h1Msg: '500',
                spanMsg: 'Мы уже фиксим',
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
