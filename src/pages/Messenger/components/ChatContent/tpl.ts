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

            {{{addUserBtn}}}

            {{{deleteUserBtn}}}

            {{{deleteChatBtn}}}
        
    </div>

</div>




    {{{messages}}}



<div class=${styles.itemChat__newMsg}>

    {{{inputMsg}}}

    {{{sendMsgBtn}}}

</div>
`;
