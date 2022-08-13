import * as styles from './styles.module.sass';

export const tpl = `
    <aside class=${styles.chat__sidebar}>

        <nav class=${styles.sidebar__nav}>
            <div class=${styles.nav__anchorToProfile}></div>
                {{{anchorToProfile}}}
                <div class=${styles.anchorToProfile__icon}>

                </div>
            </div>
        </nav>

        <div class=${styles.sidebar__chatSearch}>
            {{{searchInput}}}
        </div>

        <div class=${styles.sidebar__line}></div>

            {{{chatList}}}

    </aside>
    <main class=${styles.chat__content}>
        <span class=${styles.content__selectChatMsg}>
            Выберите чат чтобы отправить сообщение
        </span>
`;
