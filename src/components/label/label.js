import Component from "../../services/Component";
import { tpl } from "./tpl";

export default class Label extends Component {

    render() {
        // console.log('Label render')
        return this.compile(tpl)
    };
};