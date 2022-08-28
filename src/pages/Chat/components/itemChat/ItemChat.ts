import { Component } from '../../../../services/Component';
import { tpl } from './tpl';

export class ItemChat extends Component {

    render() {
        return this.compile(tpl);
    }
}