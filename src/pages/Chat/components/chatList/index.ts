import { ChatList } from './ChatList';
import { chatListItem } from './components/chatListItem';
import { IChatListItemProps } from './components/chatListItem/interfaces';
import * as styles from './styles.module.sass';

export const chatList = (chatList: IChatListItemProps[]) => {

    const content = chatList.map(chat => chatListItem(chat));

    return new ChatList(
        'article',
        {
            attr: {
                class: styles.sidebar__chatList
            },
            list: content
        });
}; 
