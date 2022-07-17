import signInStyles from './signIn.module.sass';
const Handlebars = require("handlebars");

const signInProps = { signIn: signInStyles.signIn, signIn__span: signInStyles.signIn__span, signIn__inputs: signInStyles.signIn__inputs, inputs__item: signInStyles.inputs__item, signIn__btns: signInStyles.signIn__btns, item__input: signInStyles.item__input, btns__signInBtn: signInStyles.btns__signInBtn, btns__signUpBtn: signInStyles.btns__signUpBtn }

const SignInTmpl = Handlebars.compile(`
    <article class={{signIn}}>

    <span class={{signIn__span}}>Вход</span>

    <section class={{signIn__inputs}}>
    <div class={{inputs__item}}>
        <label for="login">Логин</label>
        <input type="text" name="login" id="login" class={{item__input}}>
    </div>
    <div class={{inputs__item}}>
        <label for="password">Пароль</label>
        <input type="password" name="password" id="password" class={{item__input}}>
    </div>
    </section>

    <section class={{signIn__btns}}>
        <button class={{btns__signInBtn}}>Авторизоваться</button>
        <a href="/sign-up" class={{btns__signUpBtn}}>Нет аккаунта?</a>
    </section>

    </article>
    `);

export const SignIn = SignInTmpl(signInProps);