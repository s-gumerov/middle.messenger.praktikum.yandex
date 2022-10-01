import styles from './styles.module.sass';

export const tpl = `
    <span class=${styles.message__text}>
        {{{message}}}
    </span>
    <span class=${styles.message__time}>
        {{{time}}}
    </span>
`;
