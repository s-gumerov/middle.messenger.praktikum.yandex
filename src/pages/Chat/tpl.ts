import * as styles from './styles.module.sass';

export const tpl = `
    <aside class=${styles.chat__sidebar}>

        <nav class=${styles.sidebar__nav}>
            <div class=${styles.nav__goToProfile}>
                {{{anchorToProfile}}}
            <i class=${styles.goToProfile__icon}></i>
            </div>
        </nav>

        <div class=${styles.sidebar__chatSearch}>
            {{{searchInput}}}
        </div>

        <div class=${styles.sidebar__line}></div>

            {{{chatList}}}

    </aside>

        {{{itemChat}}}

`;
