const Handlebars = require("handlebars");
import styles from './styles.module.sass';

export const Input = ({ id, type, className, placeholder }) => {

    const inpTmplProps = {
        id: id,
        type: type,
        className: `${className} ${styles.input}`,
        placeholder: placeholder
    };

    const InpTmpl = Handlebars.compile(`
        <input id={{id}} type={{type}} name={{id}} class={{className}} placeholder={{placeholder}}>
    `);

    return InpTmpl(inpTmplProps);
};