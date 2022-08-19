import Component from '../../services/Component';
import { tpl } from './tpl';

export class ChangePassword extends Component {
    render() {
        return this.compile(tpl);
    }
}