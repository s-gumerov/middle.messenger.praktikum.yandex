import * as styles from './styles.module.sass';

export const tpl = `
    <aside class=${styles.aside}>
        {{{anchorToProfile}}}
    </aside>
    <section class=${styles.form}>
        {{{avatar}}}
        <section class=${styles.form__item}>
            <section class=${styles.form__inputs}>
                {{{oldPasswordInput}}}
                <div class=${styles.line}></div>
                {{{newPasswordInputName}}}
                <div class=${styles.line}></div>
                {{{againNewPasswordInput}}}
            </section>
        </section>
            <section class=${styles.form__btn}>
                {{{saveBtn}}}
            </section>
    </section>
`;


/*
<article class={{container}}>
    <aside class={{aside}}>
        {{{anchor}}}
    </aside>
    <section class={{form}}>
        {{{avatar}}}
        <section class={{form__item}}>
            <section class={{form__inputs}}>
                {{{inputs}}}
            </section>
        </section>
        {{{btnsGroup}}}
    </section>
</article>

*/