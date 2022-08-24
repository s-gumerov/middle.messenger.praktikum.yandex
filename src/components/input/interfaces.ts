export interface IInputProps {
    pattern?: string,
    title?: string,
    required?: boolean,
    id: string,
    name: string,
    type: string,
    className: string,
    placeholder: string,
    disabled: boolean,
    value: string,
    accept?: string,
    multiple?: boolean,
    inputHandler?: (e: Event) => void,
    focusHandler?: (e: Event) => void,
    blurHandler?: (e: Event) => void,
    changeHandler?: (e: Event) => void
}