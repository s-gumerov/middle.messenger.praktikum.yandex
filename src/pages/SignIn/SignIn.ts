import Component from '../../services/Component';
import { tpl } from './tpl';

export class SignIn extends Component {
    render() {
        return this.compile(tpl);
    }
}