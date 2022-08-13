import * as styles from './styles.module.sass';

export const tpl = `
    <aside class=${styles.aside}>
        {{{anchorToProfile}}}
    </aside>
    <section class=${styles.form}>
        {{{avatar}}}
            <section class=${styles.form__inputs}>
                {{{oldPasswordInput}}}
                <div class=${styles.line}></div>
                {{{newPasswordInputName}}}
                <div class=${styles.line}></div>
                {{{againNewPasswordInput}}}
            </section>
            <section class=${styles.form__btn}>
                {{{saveBtn}}}
            </section>
    </section>
`;