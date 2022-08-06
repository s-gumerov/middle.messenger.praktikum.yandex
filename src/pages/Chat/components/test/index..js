import { Component } from "../../../../services/Component";
import { tpl } from "./tpl";

export class Nav extends Component {

    render() {
        console.log("test render");
        return this.compile(tpl);
    }
}