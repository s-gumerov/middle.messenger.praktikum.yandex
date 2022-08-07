import Input from "./Input2";

export const input = ({ id, name, type, className, placeholder, disabled, value, focusHandler, blurHandler }) => {
    return new Input(
        'div',
        {
            id: id,
            name:name,
            type: type ?? 'text',
            className: className ?? '',
            placeholder: placeholder ?? '',
            disabled: disabled ?? 'disabled',
            value: value ?? '',
            events: {
                focus: focusHandler,
                blur: blurHandler,
            }

        }
    );
};



