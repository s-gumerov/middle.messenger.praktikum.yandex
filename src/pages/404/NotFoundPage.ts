import Component from '../../services/Component';
import { tpl } from './tpl';

export class NotFoundPage extends Component {
    render() {
        // console.log('NotFoundPage render');
        return this.compile(tpl);
    }
};