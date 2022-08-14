import Component from "../../services/Component";
import { tpl } from "./tpl";

export class Avatar extends Component {
    render() {
        return this.compile(tpl);
    };
}