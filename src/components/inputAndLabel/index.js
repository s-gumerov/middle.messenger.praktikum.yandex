import * as styles from './styles.module.sass';
import { InputAndLabel } from './InputAndLabel';
import { label as labelComponent } from '../label';
import { input as inputComponent } from '../input';


export const inputAndLabel = ({ props }) => {

    const inputProps = {
        id: props.id,
        name: props.name,
        type: props.type,
        className: props.inputClassName,
        placeholder: props.placeholder,
        disabled: props.disabled,
        value: props.value,
        focusHandler: props.focusHandler,
        blurHandler: props.blurHandler,
        clickHandler: props.clickHandler,

    };

    const labelProps =
    {
        id: `label-${props.id}`,
        to: props.id,
        className: props.labelClassName,
        message: props.placeholder,
    };

    const input = inputComponent(inputProps);
    const label = labelComponent(labelProps);

    return new InputAndLabel(
        'div',
        {
            input: input,
            label: label,
            className: styles.item__input
        })
};