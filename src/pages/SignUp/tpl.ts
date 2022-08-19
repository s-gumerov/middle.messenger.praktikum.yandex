import * as styles from './styles.module.sass';

export const tpl = `
    <span class=${styles.form__span}>
    Регистрация
    </span>
    <section class=${styles.form__inputs}>
        {{{emailInput}}}
        {{{loginInput}}}
        {{{firstNameInput}}}
        {{{secondNameInput}}}
        {{{phoneInput}}}
        {{{passwordInput}}}
        {{{againPasswordInput}}}
    </section>
    {{{signUpBtn}}}
    {{{signInAnchor}}}
`;        