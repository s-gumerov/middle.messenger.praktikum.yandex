import signUpStyles from './signUp.module.sass';
import SignUpTmpl from './signUp.hbs';

const styles = {
    form: signUpStyles.form,
    form__span: signUpStyles.form__span,
    form__inputs: signUpStyles.form__inputs,
    inputs__item: signUpStyles.inputs__item,
    form__btns: signUpStyles.form__btns,
    item__input: signUpStyles.item__input,
    item__label: signUpStyles.item__label,
    btns__btn: signUpStyles.btns__btn,
    btns__anchor: signUpStyles.btns__anchor,
};

export const SignUp = SignUpTmpl({ ...styles });
