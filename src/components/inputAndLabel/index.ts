import * as styles from './styles.module.sass';
import { InputAndLabel } from './InputAndLabel';
import { label as labelComponent } from '../label';
import { input as inputComponent } from '../input';
import { InputAndLabelProps } from './interfaces';
import { IInputProps } from '../input/interfaces';


export const inputAndLabel = ({ id, name, type, placeholder, disabled, value, pattern, title, inputClassName, labelClassName, inputHandler, focusHandler, blurHandler }: InputAndLabelProps) => {

    const inputProps: IInputProps = {
        id: id,
        name: name,
        type: type,
        className: inputClassName,
        placeholder: placeholder,
        disabled: disabled,
        value: value,
        focusHandler: focusHandler,
        blurHandler: blurHandler,
        inputHandler: inputHandler,
        pattern: pattern,
        title: title
    };

    const labelProps =
    {
        id: `label-${id}`,
        to: id,
        className: labelClassName,
        message: placeholder,
    };

    const input = inputComponent(inputProps);
    const label = labelComponent(labelProps);

    return new InputAndLabel(
        'div',
        {
            attr: {
                class: styles.inputs__item,
            },
            input: input,
            label: label,
            className: styles.inputs__item
        })
};