import * as styles from './styles.module.sass';

export const tpl = `
<div class=${styles.itemChat__header}>
    <div class=${styles.header__userData}>
        
        {{{avatar}}}
        
        <span class=${styles.userData__name}>
            {{userName}}
        </span>
    </div>

<i class=${styles.header__userToolsBtn}></i>

    
    <div class=${styles.userTools__list}>

        <div class=${styles.list__item}>
            <i class=${styles.item__addUserBtn}></i>
            <span class=${styles.list__text}>Добавить пользователя</span>
        </div>

        <div class=${styles.list__item}>
            <i class=${styles.item__deleteUserBtn}></i>
            <span class=${styles.list__text}>Удалить пользователя</span>
        </div>

    </div>

</div>

<div class=${styles.itemChat__line}></div>

{{{messages}}}

<div class=${styles.itemChat__line}></div>

<div class=${styles.itemChat__newMsg}>

    {{{inputMsg}}}

    {{{sendMsgBtn}}}

</div>
`;
