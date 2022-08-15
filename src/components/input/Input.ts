import Component from "../../services/Component";
import { tpl } from "./tpl";
import { IInputProps } from "./interfaces";

export class Input extends Component {

    constructor({ pattern, title, required, id, name, type, className, placeholder, disabled, value, inputHandler, focusHandler, blurHandler }: IInputProps) {
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
                },
                attr: {
                    pattern: pattern,
                    title: title ?? '',
                    required: required
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
        });
    };

    addAttribute() {
        const { attr = {} } = this._props;
        this._element.querySelectorAll('input').forEach(input => {
            Object.entries(attr).forEach(([key, value]) => {
                if (value !== undefined)
                    input.setAttribute(key, value as string);
            });
        })

    }
};