import { Component } from '../../../../services/Component';
import { tpl } from './tpl';

export class Chat extends Component {
    render() {
        return this.compile(tpl);
    }
}