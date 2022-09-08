import Store from './Store';
import { IStore } from './interfaces';
import { IChatList } from '../pages/Messenger/components/Chat/interfaces';

// const store = new Store();

const getChatListState = () => {

	const state = Store.getState(),
		chatList: IChatList = state.form ?? {};

	return Object.assign(
		{
			chats: []
		},
		chatList
	);
};

const setChatList = (newChatList: IChatList[]) => {
	console.log(newChatList)
	const prevChatList = getChatListState().chats
	const chatList: IChatList[] = [...prevChatList, ...newChatList];

	Store.set('chatList', chatList as []);
};

export { setChatList };
