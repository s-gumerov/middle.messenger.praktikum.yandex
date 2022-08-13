export interface IBtnProps {
    anchorPath?: string,
    btnType?: string,
    msg: string,
    className: string,
    disabled?: boolean,
    clickHandler?: (e: Event) => void,
    focusHandler?: (e: Event) => void,
    blurHandler?: (e: Event) => void
}