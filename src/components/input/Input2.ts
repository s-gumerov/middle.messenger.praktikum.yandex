import Component from "../../services/Component";
import { tpl } from "./tpl";

export default class Input extends Component {

    render() {
        return this.compile(tpl)
    };

    addEvents() {
        this._element.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', this._props.events.focus);
            input.addEventListener('blur', this._props.events.blur);
            input.addEventListener('input', this._props.events.input);
        });
    };
};