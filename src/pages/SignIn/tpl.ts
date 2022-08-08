import * as styles from './styles.module.sass';

export const tpl = `
    <span class=${styles.form__span}>
    Вход
    </span>
    <section class=${styles.form__inputs}>
        {{{loginInput}}}
        {{{passwordInput}}}
    </section>
    {{{loginBtn}}}
    {{{signUpAnchor}}}
`;        