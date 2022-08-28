import { Component } from "../../services/Component";
import { tpl } from "./tpl";
import { IAnchorProps } from "./interfaces";
import { addAttribute } from "../../utils/addAttribute";


export class Anchor extends Component {

    constructor({ anchorPath, msg, className, clickHandler }: IAnchorProps) {
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
        addAttribute(attr, 'a', this._element);
    }
};
