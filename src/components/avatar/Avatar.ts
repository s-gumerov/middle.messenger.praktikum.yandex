import Component from "../../services/Component";
import { tpl } from "./tpl";

export class Avatar extends Component {
    render() {
        return this.compile(tpl);
    };

    addAttribute() {
        const { attr = {} } = this._props;
        this._element.querySelectorAll('img').forEach(img => {
            Object.entries(attr).forEach(([key, value]) => {
                if (value !== undefined)
                    img.setAttribute(key, value as string);
            });
        })

    }
}