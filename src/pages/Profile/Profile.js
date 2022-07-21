import styles from './styles.module.sass';
import ProfileTmpl from './profile.hbs';
import { Input } from '../../components/input/input';
import { Btn } from '../../components/button/button';
import { Avatar } from '../../components/avatar/avatar';


const avatarProps =
{
    alt: 'автар',
    src: `https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg`,
    figureClassName: styles.figure,
    imgClassName: styles.figure__img
}


const props = {
    inputs: Avatar(avatarProps),
};

export const Profile = ProfileTmpl({ ...styles, ...props });