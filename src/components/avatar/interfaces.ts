export interface IAvatarProps {
    alt: string,
    src: string,
    figureClassName: string,
    imgClassName: string,
    mouseoverHandler?: (e: Event) => void,
    mouseleaveHandler?: (e: Event) => void,
    clickHandler?: (e: Event) => void
}
