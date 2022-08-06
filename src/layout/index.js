import Component from "../services/Component";
import tpl from './tpl';
import * as styles from './styles.module.sass';

export default class Index extends Component {
    render() {
        console.log('page render');
        // return this.compile(tpl({ ...styles }));
        return this.compile(tpl);

    }
}
