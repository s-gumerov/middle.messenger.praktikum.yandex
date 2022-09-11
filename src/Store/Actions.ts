import Store from './Store';
import { IChatList } from '../pages/Messenger/components/Chat/interfaces';
import { IProfile } from '../pages/ProfileEdit/interfaces';

interface IActiveChat {
	id: string,
	title: string,
	avatar: string
}

const getChatListState = () => {
	const state = Store.getState();
	const chatList: IChatList[] = state.chatList ?? {};

	return Object.assign(
		[],
		chatList
	);
};

const setChatList = (newChatList: IChatList[]) => {
	Store.set('chatList', newChatList);
};

const getProfileState = () => {

	const state = Store.getState();
	const profile: IProfile = state.profile ?? {};

	return Object.assign(
		{
			profile:
			{
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
	Store.set('profile', profile);
};

const getActiveChatState = () => {

	const state = Store.getState();
	const activeChat = state.activeChat ?? {};

	return Object.assign(
		{
			id: null,
			title: '',
			avatar: ''
		},
		activeChat
	);
};

const setActiveChat = (activeChat: IActiveChat) => {
	Store.set('activeChat', activeChat);
};

export { setChatList, setActiveChat, setProfile, getChatListState, getActiveChatState, getProfileState };
