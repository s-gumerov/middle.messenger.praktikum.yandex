import { ChatList } from './ChatList';
import { chatListItem } from '../chatListItem/';
import { IChatListItemProps } from '../chatListItem/interfaces';
import * as styles from './styles.module.sass';

export const chatList = (chatList: IChatListItemProps[]) => {

    const content = chatList.map(chat => chatListItem(chat));

    return new ChatList(
        'article',
        {
            attr: {
                class: styles.sidebar__chatList
            },
            content: content,
            // events: {
            //     "submit": submitHandler,
            // }
        });
}; 
