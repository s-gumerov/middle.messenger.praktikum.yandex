const Handlebars = require("handlebars");

export const Input = ({ id, type, className, placeholder, disabled, value }) => {

    const inpTmplProps = {
        id: id,
        type: type,
        className: className,
        placeholder: placeholder,
        disabled: disabled,
        value: value ?? ''
    };

    const InpTmpl = Handlebars.compile(`
        <input id={{id}} type={{type}} name={{id}} class={{className}}  placeholder={{placeholder}} value={{value}} ${disabled ? 'disabled' : ''} >
    `);

    return InpTmpl(inpTmplProps);
};