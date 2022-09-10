import Store from './Store';
import { IChatList } from '../pages/Messenger/components/Chat/interfaces';
import { IProfile } from '../pages/ProfileEdit/interfaces';

interface IActiveChat {
	id: string
}

const getChatListState = () => {

	const state = Store.getState(),
		chatList: IChatList = state.form ?? {};

	return Object.assign(
		{
			chatList: []
		},
		chatList
	);
};

const setChatList = (newChatList: IChatList[]) => {
	console.log(newChatList)
	const prevChatList = getChatListState().chatList;
	const chatList: IChatList[] = [...prevChatList, ...newChatList];

	Store.set('chatList', chatList as []);
};

const getProfileState = () => {

	const state = Store.getState(),
		profile: IProfile = state.profile ?? {};

	return Object.assign(
		{
			profile:
			{
				id: 0,
				first_name: '',
				second_name: '',
				display_name: null,
				login: '',
				email: '',
				phone: '',
				avatar: null,
			}
		},
		profile
	);
};

const setProfile = (profile: IProfile) => {
	console.log(profile);

	Store.set('profile', profile);
};


const getActiveChatState = () => {

	const state = Store.getState();
	const activeChat = state.activeChat ?? {};

	return Object.assign(
		{
			activeChat: null,

		},
		activeChat
	);
};

const setActiveChat = (activeChat: number) => {
	console.log(activeChat);

	Store.set('activeChat', activeChat);
};

export { setChatList, setProfile, setActiveChat, getActiveChatState };
