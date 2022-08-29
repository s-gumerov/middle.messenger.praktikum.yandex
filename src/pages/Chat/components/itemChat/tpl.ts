import * as styles from './styles.module.sass';

export const tpl = `
<div class=${styles.itemChat__header}>
    <div class=${styles.header__userData}>
        
        {{{avatar}}}
        
        <span class=${styles.userData__name}>
            {{userName}}
        </span>
    </div>

    {{{userToolsBtn}}}

    
    <div class='${styles.userTools__list} ${styles.userTools__list_hidden}'>

        <div class=${styles.list__item}>
            {{{addUserBtn}}}
            <span class=${styles.list__text}>Добавить пользователя</span>
        </div>

        <div class=${styles.list__item}>
            {{{deleteUserBtn}}}
            <span class=${styles.list__text}>Удалить пользователя</span>
        </div>

    </div>

</div>




    {{{messages}}}



<div class=${styles.itemChat__newMsg}>

    {{{inputMsg}}}

    {{{sendMsgBtn}}}

</div>
`;
