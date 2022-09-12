import * as styles from './styles.module.sass';

export const tpl = `
    <aside class=${styles.messenger__sidebar}>
        <nav class=${styles.sidebar__nav}>
            {{{addChatBtn}}}
            {{{anchorToProfile}}}
        </nav>

        <div class=${styles.sidebar__chatSearch}>
            {{{searchInput}}}
        </div>

        <div class=${styles.sidebar__line}></div>
            {{{chatList}}}
    </aside>

        {{{chatContent}}}

    <form class=${styles.modal}>
        <div class=${styles.modal__box}>
            <div class=${styles.box__header}>
                <span class=${styles.header__msg}>Создать новый чат</span>
                {{{closeModalBtn}}}
            </div>

            {{{modalInput}}}
            {{{submitModalBtn}}}
        </div>
    </form>

`;
