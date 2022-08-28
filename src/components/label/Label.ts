import { Component } from "../../services/Component";
import { tpl } from "./tpl";
import { ILableProps } from "./interfaces";

export class Label extends Component {

    constructor({ id, to, className, message }: ILableProps) {
        super('div',
            {
                id: id,
                to: to,
                className: className,
                message: message
            }
        );
    }

    render() {
        return this.compile(tpl)
    };
};
