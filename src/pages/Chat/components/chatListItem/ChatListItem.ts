import { Component } from '../../../../services/Component';
import { tpl } from './tpl';

export class ChatListItem extends Component {
    render() {
        return this.compile(tpl);
    }
}