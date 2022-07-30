const Handlebars = require("handlebars");
import style from './styles.module.sass';

export const Label = ({ id, type, className, placeholder }) => {

    const LabelTmplProps = {
        id: id,
        type: type,
        className: `${style.input} ${className}`,
        placeholder: placeholder
    };

    const LabelTmpl = Handlebars.compile(`
        <label id={{labelId}} for={{id}} class={{item__label}}>123</label> 
        `);

    return LabelTmpl(LabelTmplProps);
};