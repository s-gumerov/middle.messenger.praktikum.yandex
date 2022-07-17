import signUpStyles from './signUp.module.sass';
const Handlebars = require("handlebars");

const SignUpProps = { containerStyle: signUpStyles.container, mainStyle: signUpStyles.main }

const SignUpTmpl = Handlebars.compile(`
    <div class={{containerStyle}}>
<a href='/sign-in'>Есть аккаунт? Войти</a>
    SignUp

    </div>
    `);

export const SignUp = SignUpTmpl(SignUpProps);
