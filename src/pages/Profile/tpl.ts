import * as styles from './styles.module.sass';

export const tpl = `
    <aside class=${styles.aside}>
        {{{anchorToProfile}}}
    </aside>
    <section class=${styles.form}>
        {{{avatar}}}
        <span class=${styles.form__span}>Иван</span>
        <section class=${styles.form__item}>
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
        </section>
        <section class=${styles.form__item}>
            <section class=${styles.form__item__btns}>
                {{{editProfileAnchor}}}
                <div class=${styles.line}></div>
                {{{changePasswordAnchor}}}
                <div class=${styles.line}></div>
                {{{goToChatAnchor}}}
            </section>
        </section>
    </section>
`;