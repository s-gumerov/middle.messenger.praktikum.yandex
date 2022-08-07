import Component from "../../services/Component";
import { btnTpl } from "./btnTpl";
import { anchorTpl } from "./anchorTpl";

export default class Btn extends Component {
    render() {
        const tag = this._props.anchorPath ? anchorTpl : btnTpl;
        return this.compile(tag);
    }
}