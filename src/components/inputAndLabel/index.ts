import * as styles from './styles.module.sass';
import { InputAndLabel } from './InputAndLabel';
import { Label } from '../label/Label';
import { Input } from '../input/Input';
import { InputAndLabelProps } from './interfaces';
import { IInputProps } from '../input/interfaces';


export const inputAndLabel = ({ id, name, type, placeholder, disabled, value, pattern, title, required, containerClass, inputClassName, labelClassName, inputHandler, focusHandler, blurHandler }: InputAndLabelProps) => {

    const inputProps: IInputProps = {
        id: id,
        name: name,
        type: type,
        className: inputClassName,
        placeholder: placeholder,
        disabled: disabled,
        value: value,
        pattern: pattern,
        title: title,
        required: required,
        focusHandler: focusHandler,
        blurHandler: blurHandler,
        inputHandler: inputHandler,
    };

    const labelProps =
    {
        id: `label-${id}`,
        to: id,
        className: labelClassName,
        message: placeholder,
    };

    const input = new Input(inputProps);
    const label = new Label(labelProps);

    return new InputAndLabel(
        'div',
        {
            attr: {
                class: containerClass ?? styles.inputs__item,
            },
            input: input,
            label: label,
        })
};