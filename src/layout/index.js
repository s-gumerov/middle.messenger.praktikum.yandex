import Component from "../services/Component";
import tpl from './tpl';

export default class Index extends Component {
    render() {
        console.log('page render');
        return this.compile(tpl);

    }
}
