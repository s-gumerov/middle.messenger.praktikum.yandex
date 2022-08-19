import Component from '../../services/Component';
import { tpl } from './tpl';

export class ProfileEdit extends Component {
    render() {
        return this.compile(tpl);
    }
}