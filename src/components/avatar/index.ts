import { Avatar } from "./Avatar";
import { IAvatarProps } from "./interfaces";
import * as styles from './styles.module.sass';

export const avatar = ({ alt, src, figureClassName, imgClassName, mouseoverHandler, mouseoutHandler, clickHandler }: IAvatarProps) => {

    return new Avatar(
        'figure',
        {
            imgClassName: imgClassName,
            alt: alt,
            src: src,
            events: {
                click: clickHandler,
                mouseover: mouseoverHandler,
                mouseout: mouseoutHandler
            },
            attr: {
                class: `${figureClassName} ${styles.figure}`,
            }

        }
    )
};