import * as styles from './styles.module.sass';

export const tpl = `
    <aside class=${styles.chat__sidebar}>
        <nav class=${styles.sidebar__nav}>
            <div class=${styles.nav__goToProfile}>
                {{{anchorToProfile}}}
            <i class=${styles.goToProfile__icon}></i>
            </div>
        </nav>
        <div class=${styles.sidebar__addChat}>
            <span class=${styles.addChat__span}>Добавить чат</span>
            {{{addChatBtn}}}
        </div>

        <div class=${styles.sidebar__chatSearch}>
            {{{searchInput}}}
        </div>

        <div class=${styles.sidebar__line}></div>

            {{{chatList}}}

    </aside>

        {{{itemChat}}}

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
