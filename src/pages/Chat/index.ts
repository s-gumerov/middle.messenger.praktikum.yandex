import { Connect } from "../../Store";
import { Chat } from "../Chat/Chat";

interface ISignInStore {
    form: string
}

export default Connect(Chat, (store: ISignInStore) => store.form ?? {})
