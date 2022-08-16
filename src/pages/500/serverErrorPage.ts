import Component from '../../services/Component';
import { tpl } from './tpl';

export class ServerErrorPage extends Component {
    render() {
        return this.compile(tpl);
    }
};
