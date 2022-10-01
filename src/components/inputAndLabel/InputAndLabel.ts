import { Component } from '../../services/Component';
import { tpl } from './tpl';
import { InputAndLabelProps } from './interfaces';
import { IInputProps } from '../input/interfaces';
import { Label } from '../label/Label';
import { Input } from '../input/Input';
import styles from './styles.module.sass';

export class InputAndLabel extends Component {
    constructor(
        {
            id,
            name,
            type,
            placeholder,
            disabled,
            value,
            pattern,
            title,
            required,
            accept,
            multiple,
            containerClass,
            inputClassName,
            labelClassName,
            inputHandler,
            focusHandler,
            blurHandler,
            changeHandler
        }: InputAndLabelProps
    ) {

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
            accept: accept,
            multiple: multiple,
            focusHandler: focusHandler,
            blurHandler: blurHandler,
            inputHandler: inputHandler,
            changeHandler: changeHandler
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

        super(
            'div',
            {
                attr: {
                    class: containerClass ?? styles.inputs__item,
                },
                input: input,
                label: label,
            }
        )
    }
    render() {
        return this.compile(tpl)
    }
}