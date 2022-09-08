import { connect } from "../../Store/Connect";
import { Messenger } from "./Messenger";
import { IChatProps } from "./components/Chat/interfaces";

const MessengerPage = connect(state => ({ chatList: state.chatList as IChatProps[] }));
export default MessengerPage(Messenger)

/*
// import { Connect } from "../../Store";
import { connect } from "../../Store/Connect";
// import { IChatProps } from "./components/Chat/interfaces";

import { Messenger } from "./Messenger";

// interface IChatList {
//     chatList: IChatProps[]
// }

// function mapUserToProps(state: IChatList) {
//     return {
//         chatList: state.chatList,
//     };
// }
// connect(Messenger, mapUserToProps)

// // export default connect(Messenger, (state: ISignInStore) => state.chatList ?? {})

const MessengerPage = connect(state => ({ chatList: state.chatList }));

export default MessengerPage(Messenger)
*/