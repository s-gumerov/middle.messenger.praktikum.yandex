import styles from './styles.module.sass';

export const tpl = `
<div class=${styles.chatListItem}>

    {{{avatar}}}

    <div class=${styles.chatListItem__content}>
        <span class=${styles.content__span}>
            {{chatName}}
        </span>
        <div class=${styles.content__lastMsg}>
            {{lastMsg}}
        </div>
    </div>
    <div class=${styles.content__msgInfo}>
        <span class=${styles.msgInfo__time}>
            {{lastMsgTime}}
        </span>

        {{{msgCountBtn}}}

    </div>
    </div>
<div class=${styles.sidebar__line}></div>
`;
