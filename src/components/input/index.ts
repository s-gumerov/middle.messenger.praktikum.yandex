import {Input} from "./Input";
import { IInputProps } from "./interfaces";

export const input = ({ pattern, title, required, id, name, type, className, placeholder, disabled, value, inputHandler, focusHandler, blurHandler }: IInputProps) => {

    return new Input(
        'div',
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
};



