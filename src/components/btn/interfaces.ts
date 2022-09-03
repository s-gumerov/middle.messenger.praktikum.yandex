export interface IBtnProps {
    id?: string,
    btnType?: string,
    msg: string,
    className: string,
    disabled?: boolean,
    child?: string,
    clickHandler?: (e: Event) => void,
    focusHandler?: (e: Event) => void,
    blurHandler?: (e: Event) => void
}
