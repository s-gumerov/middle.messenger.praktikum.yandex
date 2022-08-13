import Component from "../../services/Component";
import { btnTpl } from "./btnTpl";
import { anchorTpl } from "./anchorTpl";

export class Btn extends Component {
    render() {
        const tag = this._props.anchorPath ? anchorTpl : btnTpl;
        return this.compile(tag);
    };

    addAttribute() {
        const { attr = {} } = this._props;
        this._element.querySelectorAll('button').forEach(button => {
            Object.entries(attr).forEach(([key, value]) => {
                if (value !== undefined)
                    button.setAttribute(key, value as string);
            });
        })

    }
}