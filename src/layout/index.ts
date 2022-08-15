import Component from "../services/Component";
import tpl from './tpl';

export class Layout extends Component {
    render() {
        return this.compile(tpl);

    }
}
