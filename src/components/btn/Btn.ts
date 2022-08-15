import Component from "../../services/Component";
import { tpl } from "./tpl";
import { IBtnProps } from "./interfaces";

export class Btn extends Component {

    constructor({ btnType, msg, className, clickHandler, focusHandler, blurHandler, disabled }: IBtnProps) {
        super('div',
            {
                btnType: btnType,
                msg: msg,
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

        this._element.querySelectorAll('button').forEach(button => {
            Object.entries(attr).forEach(([key, value]) => {
                if (value !== undefined)
                    button.setAttribute(key, value as string);
            });
        })
    }
}