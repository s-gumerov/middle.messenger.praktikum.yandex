import { Component } from "../../services/Component";
import { tpl } from "./tpl";
import { IInputProps } from "./interfaces";
import { addAttribute } from "../../utils/addAttribute";

export class Input extends Component {

    constructor({ pattern, title, required, id, name, type, className, placeholder, disabled, value, inputHandler, focusHandler, blurHandler, changeHandler, accept, multiple }: IInputProps) {

        super('div',
            {
                id: id,
                name: name,
                type: type ?? 'text',
                className: className ?? '',
                placeholder: placeholder ?? '',
                disabled: disabled,
                pattern: pattern,
                title: title,
                value: value ?? '',
                events: {
                    focus: focusHandler,
                    blur: blurHandler,
                    input: inputHandler,
                    change: changeHandler
                },
                attr: {
                    pattern: pattern ? pattern.replace(/^.|.$/g, "") : '',
                    title: title ?? '',
                    required: required,
                    accept: accept,
                    multiple: multiple
                }
            }
        );
    }

    render() {
        return this.compile(tpl)
    };

    addEvents() {
        this._element.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', this._props.events.focus);
            input.addEventListener('blur', this._props.events.blur);
            input.addEventListener('input', this._props.events.input);
            input.addEventListener('input', this._props.events.change);
        });
    };

    addAttribute() {
        const { attr = {} } = this._props;
        addAttribute(attr, 'input', this._element);
    }
};