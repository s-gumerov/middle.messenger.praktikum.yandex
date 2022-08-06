import Component from "../../services/Component";
import tpl from './tpl';
import * as styles from './styles.module.sass';

export default class Btn extends Component {
    render() {
        console.log(this._props.name);

        return this.compile(tpl);
    }
}