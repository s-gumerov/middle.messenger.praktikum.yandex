import Component from "../services/Component";
import tpl from './tpl';

export class Index extends Component {
    render() {
        return this.compile(tpl);

    }
}
