import * as styles from './styles.module.sass';

export const tpl = `

        <div class=${styles.chatContent__header}>
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
                    {{{deleteChatBtn}}}
            </div>

        </div>

            {{{messages}}}

        <div class=${styles.chatContent__newMsg}>
            {{{inputMsg}}}
            {{{sendMsgBtn}}}
        </div>

            {{{usersList}}}

        <form class=${styles.modal}>
            <div class=${styles.modal__box}>
                <div class=${styles.box__header}>
                    <span class=${styles.header__msg}>Добавить пользователя</span>
                    {{{closeModalBtn}}}
                </div>
            {{{modalInput}}}
            {{{submitModalBtn}}}
            </div>
        </form>
`;
