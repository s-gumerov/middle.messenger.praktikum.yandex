import Btn from "./Btn"

export const btn = ({ anchorPath, btnType, msg, className, clickHandler, focusHandler, blurHandler }) => {

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
