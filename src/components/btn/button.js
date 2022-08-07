const Handlebars = require("handlebars");

export const Btn = ({ anchorPath, msg, className }) => {

    const btnTmplProps = {
        anchorPath: anchorPath,
        msg: msg,
        className: `${className}`
    }



    const tag = anchorPath ? anchor : button;

    const BtnTmpl = Handlebars.compile(tag);

    return BtnTmpl(btnTmplProps);
};