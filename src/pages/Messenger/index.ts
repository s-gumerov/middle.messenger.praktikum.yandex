import { Connect } from "../../Store";
import { Messenger } from "./Messenger";

interface ISignInStore {
    form: string
}

export default Connect(Messenger, (store: ISignInStore) => store.form ?? {})
