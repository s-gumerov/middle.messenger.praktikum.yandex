import Component from '../../../../services/Component';
import { tpl } from './tpl';

export class ChatList extends Component {
    render() {
        return this.compile(tpl);
    }
}