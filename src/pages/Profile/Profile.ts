import Component from '../../services/Component';
import { tpl } from './tpl';

export class Profile extends Component {
    render() {
        return this.compile(tpl);
    }
}