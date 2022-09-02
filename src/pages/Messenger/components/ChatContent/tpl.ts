import * as styles from './styles.module.sass';

export const tpl = `
<div class=${styles.itemChat__header}>
    <div class=${styles.header__userData}>
        
        {{{chatAvatar}}}
        
        <span class=${styles.userData__name}>
            {{chatName}}
        </span>
    </div>

    {{{toolsBtn}}}

    
    <div class='${styles.userTools__list} ${styles.userTools__list_hidden}'>

        <div class=${styles.list__item}>
            {{{addUserBtn}}}
            <span class=${styles.list__text}>Добавить пользователя</span>
        </div>

        <div class=${styles.list__item}>
            {{{deleteUserBtn}}}
            <span class=${styles.list__text}>Удалить пользователя</span>
        </div>

        <div class=${styles.list__item}>
            {{{deleteChatBtn}}}
            <span class=${styles.list__text}>Удалить чат</span>
        </div>
        
    </div>

</div>




    {{{messages}}}



<div class=${styles.itemChat__newMsg}>

    {{{inputMsg}}}

    {{{sendMsgBtn}}}

</div>
`;
