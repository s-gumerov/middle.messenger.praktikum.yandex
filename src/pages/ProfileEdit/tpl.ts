import * as styles from './styles.module.sass';

export const tpl = `
    <aside class=${styles.aside}>
        {{{anchorToProfile}}}
    </aside>
    <section class=${styles.form}>
        {{{avatar}}}
            <section class=${styles.form__inputs}>
                {{{emailInput}}}
                <div class=${styles.line}></div>
                {{{loginInput}}}
                <div class=${styles.line}></div>
                {{{firstNameInput}}}
                <div class=${styles.line}></div>
                {{{secondNameInput}}}
                <div class=${styles.line}></div>
                {{{displayNameInput}}}
                <div class=${styles.line}></div>
                {{{phoneInput}}}
            </section>
            <section class=${styles.form__btn}>
                {{{saveBtn}}}
            </section>
    </section>
`;