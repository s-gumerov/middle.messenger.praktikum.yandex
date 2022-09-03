import * as styles from './styles.module.sass';
// ${styles.chatMembersList_hidden}

export const tpl = `

<div class=${styles.itemChat__header}>
    <div class=${styles.header__chatData}>
        
        {{{chatAvatar}}}
        {{{avatarUpload}}}
        
        <span class=${styles.chatData__name}>
            {{chatName}}
        </span>
        {{{showMembersBtn}}}
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
<div class='${styles.chatMembersList} ${styles.chatMembersList_hidden}'>
{{{usersList}}}
</div>
`;


