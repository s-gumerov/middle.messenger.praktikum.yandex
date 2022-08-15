import Component from "../../services/Component";
import { tpl } from "./tpl";
import { IAnchorProps } from "./interfaces";

export class Anchor extends Component {

    constructor({ anchorPath,  msg, className, clickHandler}: IAnchorProps) {
        super('div',
            {
                anchorPath: anchorPath,
                msg: msg,
                events: {
                    click: clickHandler,
                },
                attr: {
                    class: className,
                }

            }
        );
    }

    render() {
        return this.compile(tpl);
    };

    addAttribute() {
        const { attr = {} } = this._props;

        this._element.querySelectorAll('a').forEach(a => {
            Object.entries(attr).forEach(([key, value]) => {
                if (value !== undefined)
                    a.setAttribute(key, value as string);
            });
        })

    }
};
