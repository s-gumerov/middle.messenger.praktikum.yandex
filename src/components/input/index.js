import Input from "./Input2";

export const input = ({ pattern, title, id, name, type, className, placeholder, disabled, value, inputHandler, focusHandler, blurHandler }) => {

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
            }

        }
    );
};



