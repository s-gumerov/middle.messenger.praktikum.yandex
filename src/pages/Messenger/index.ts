import { connect } from "../../Store/Connect";
import { Messenger } from "./Messenger";
import { IChatProps } from "./components/Chat/interfaces";
// interface IChatList {
//     chatList: IChatProps[]
// }

const MessengerPage = connect(state => ({ chatList: state.chatList }));
export default MessengerPage(Messenger)






// function mapUserToProps(state: IChatList) {
//     return {
//         chatList: state.chatList,
//     };
// }
// connect(Messenger, mapUserToProps)

// // export default connect(Messenger, (state => state.chatList ?? {})


