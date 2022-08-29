import { Component } from "../../../../../../services/Component";
import { tpl } from "./tpl";
import { IMessageProps } from "./interfaces";

export class Message extends Component {
    constructor({ message, time, imgSrc, className }: IMessageProps) {
        super(
            'div',
            {
                attr: {
                    class: className
                },
                message: message,
                time: time,
                imgSrc: imgSrc,
            }
        )
    }

    render() {
        return this.compile(tpl);
    }

}