import Component from '../../services/Component';
import { tpl } from './tpl';

export class NotFoundPage extends Component {

    render() {
        return this.compile(tpl);
    }
};