import Component from "../../services/Component";
import { tpl } from "./tpl";

export class Label extends Component {

    render() {
        return this.compile(tpl)
    };
};