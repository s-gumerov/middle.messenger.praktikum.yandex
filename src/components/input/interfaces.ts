export interface IInputProps {
    pattern?: string,
    title?: string,
    id: string,
    name: string,
    type: string,
    className: string,
    placeholder: string,
    disabled: boolean,
    value: string,
    inputHandler: (e: Event) => void,
    focusHandler: (e: Event) => void,
    blurHandler: (e: Event) => void
}