import AvatarTmpl from './avatar.hbs';
import styles from './styles.module.sass';

export const Avatar = ({ alt, src, figureClassName, imgClassName }) => {

    const AvatarTmplProps =
    {
        alt: alt,
        src: src,
        figureClassName: `${figureClassName} ${styles.figure}`,
        imgClassName: `${imgClassName}`
    };

    return AvatarTmpl(AvatarTmplProps);
};