const Handlebars = require("handlebars");

export const Btn = ({ anchorPath, msg, className }) => {

    const btnTmplProps = {
        anchorPath: anchorPath,
        msg: msg,
        className: `${className}`
    }

    const anchor = `
        <a href={{anchorPath}} 
            class={{className}}>
                {{msg}}
        </a>`;

    const button = `
        <button 
            class={{className}}>
                {{msg}}
        </button>`;

    const tag = anchorPath ? anchor : button;

    const BtnTmpl = Handlebars.compile(tag);

    return BtnTmpl(btnTmplProps);
};