import { Component } from '../../../../services/Component';
import { tpl } from './tpl';
import * as styles from './styles.module.sass';

export class Stub extends Component {
    constructor(message: string) {
        super(
            'div',
            {
                message: message,
                attr: {
                    class: styles.stub__wrapper
                },
            }
        )
    }
    render() {
        return this.compile(tpl);
    }
}