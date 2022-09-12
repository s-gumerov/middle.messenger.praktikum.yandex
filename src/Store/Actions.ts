import Store from './Store';
import { IChatList } from '../pages/Messenger/components/Chat/interfaces';
import { IProfile } from '../pages/ProfileEdit/interfaces';
import { IActiveChatUsers } from '../pages/Messenger/components/ChatContent/interfaces';


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
			avatar: '',
			users: [
				{
					id: 0,
					first_name: '',
					second_name: '',
					display_name: '',
					login: '',
					email: '',
					phone: '',
					avatar: '',
					role: ''
				}
			]
		},
		activeChat
	);
};

const setActiveChat = (activeChat: IActiveChatUsers) => {
	Store.set('activeChat', activeChat);
};

const removeActiveChat = () => {

	const intialState: IActiveChatUsers = {
		id: null,
		title: '',
		avatar: '',
		users: [
			{
				id: 0,
				first_name: '',
				second_name: '',
				display_name: '',
				login: '',
				email: '',
				phone: '',
				avatar: '',
				role: ''
			}
		]
	}

	Store.set('activeChat', intialState);
};

export { setChatList, setActiveChat, setProfile, getChatListState, getActiveChatState, getProfileState, removeActiveChat };
