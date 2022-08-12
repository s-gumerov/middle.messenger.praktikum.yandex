import Component from '../../services/Component';
import { tpl } from './tpl';

export class SignUp extends Component {
    render() {
        return this.compile(tpl);
    }
}