import * as styles from './styles.module.sass';

export const tpl = `
<article class=${styles.container}>
    <section class=${styles.form}>
    <span class=${styles.form__span}>Вход</span>
    <section class=${styles.form__inputs}>
        {{{inputs}}}
    </section>
    {{{btnsGroup}}}
    </section>
</article>
`;
