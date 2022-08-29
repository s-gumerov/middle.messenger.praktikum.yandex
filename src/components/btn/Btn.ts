import { Component } from "../../services/Component";
import { tpl } from "./tpl";
import { IBtnProps } from "./interfaces";
import { addAttribute } from "../../utils/addAttribute";

export class Btn extends Component {

    constructor({ btnType, msg, child, className, clickHandler, focusHandler, blurHandler, disabled }: IBtnProps) {
        super('div',
            {
                btnType: btnType,
                msg: msg,
                child: child,
                events: {
                    click: clickHandler,
                    focus: focusHandler,
                    blur: blurHandler
                },
                attr: {
                    disabled: disabled,
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
        addAttribute(attr, 'button', this._element);
    }
}