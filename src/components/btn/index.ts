import { Btn } from "./Btn";
import { IBtnProps } from "./interfaces";

export const btn = ({ anchorPath, btnType, msg, className, clickHandler, focusHandler, blurHandler }: IBtnProps) => {

    return new Btn(
        "div",
        {
            anchorPath: anchorPath,
            btnType: btnType,
            msg: msg,
            className: className,
            events: {
                click: clickHandler,
                focus: focusHandler,
                blur: blurHandler
            }
        }
    );

};
