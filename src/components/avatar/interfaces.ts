export interface IAvatarProps {
    alt: string,
    src: string,
    figureClassName: string,
    imgClassName: string,
    mouseoverHandler?: (e: Event) => void,
    mouseoutHandler?: (e: Event) => void,
    clickHandler?: (e: Event) => void
}
