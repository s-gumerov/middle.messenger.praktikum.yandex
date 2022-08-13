import { Btn } from "./Btn";
import { IBtnProps } from "./interfaces";

export const btn = ({ anchorPath, btnType, msg, className, clickHandler, focusHandler, blurHandler, disabled }: IBtnProps) => {

    return new Btn(
        "div",
        {
            anchorPath: anchorPath,
            btnType: btnType,
            msg: msg,
            events: {
                click: clickHandler,
                focus: focusHandler,
                blur: blurHandler
            },
            attr: {
                disabled: disabled,
                class: className,
            }

        }
    );

};
