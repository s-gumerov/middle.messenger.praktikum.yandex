import Component from "../../services/Component";
import { tpl } from "./tpl";
import { IAvatarProps } from "./interfaces";
import * as styles from './styles.module.sass';

export class Avatar extends Component {

    constructor({ alt, src, figureClassName, imgClassName, mouseoverHandler, mouseleaveHandler, clickHandler }: IAvatarProps) {
        super('figure',
            {
                imgClassName: imgClassName,
                alt: alt,
                src: src,
                events: {
                    click: clickHandler,
                    mouseover: mouseoverHandler,
                    mouseout: mouseleaveHandler
                },
                attr: {
                    class: `${figureClassName} ${styles.figure}`,
                }
            }
        );
    }

    render() {
        return this.compile(tpl);
    };
}