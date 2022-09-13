import { Component } from "../../../../../../services/Component";
import { tpl } from "./tpl";
import { IChatMessages } from "./interfaces";

export class Message extends Component {
    constructor({ className, content, time, user_id }: IChatMessages) {

        super(
            'div',
            {
                attr: {
                    class: className,
                    id: user_id
                },
                message: content,
                time: time,
            }
        )
    }

    render() {
        return this.compile(tpl);
    }

}