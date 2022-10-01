import styles from './styles.module.sass';

export const tpl = `
    <article class=${styles.notFound}>
        <section class=${styles.notFound__section}>
            <label class=${styles.notFound__heder}>
            {{h1Msg}}
            </label>
            <span class=${styles.notFound__span}>
            {{spanMsg}}
            </span>
        </section>
        {{{anchor}}}
    </article>
`;