export interface IBtnProps {
    id?: string,
    btnType?: 'submit' | 'button' | 'reset',
    msg: string,
    className?: string,
    disabled?: boolean,
    child?: string,
    clickHandler?: (e: Event) => void,
    focusHandler?: (e: Event) => void,
    blurHandler?: (e: Event) => void
}
