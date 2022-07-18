import signInStyles from './signIn.module.sass';
import SignInTmpl from './signIn.hbs';

const styles = {
    form: signInStyles.form,
    form__span: signInStyles.form__span,
    form__inputs: signInStyles.form__inputs,
    inputs__item: signInStyles.inputs__item,
    form__btns: signInStyles.form__btns,
    item__input: signInStyles.item__input,
    item__label: signInStyles.item__label,
    btns__btn: signInStyles.btns__btn,
    btns__anchor: signInStyles.btns__anchor,
};

export const SignIn = SignInTmpl({ ...styles });