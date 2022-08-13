import { loginRegexp, passwordRegexp } from './regularExpressions';

export const setSubmitBtnDisabled = (btnClass: string, disabledState: boolean) => {
    const btn = document.querySelector(`.${btnClass}`);
    if (btn)
        disabledState ? btn.removeAttribute('disabled') : btn.setAttribute('disabled', 'true');
};

export const checkingAllFields = (obj: object) => {
    let completed = false;

    if (obj !== null) {
        for (const [properties, value] of Object.entries(obj)) {

            if (value === false) {
                completed = value;
                break
            } else
                completed = value
        };
    };
    return completed
};

export const setComletedFieldsState = (obj: { [index: string]: any }, findProperties: string, state: boolean) => {

    for (let [properties, value] of Object.entries(obj))
        if (properties === findProperties)
            obj[properties] = state

};

export const validate = (name: string, value: string): boolean => {

    if (name === 'login')
        return value.match(loginRegexp) !== null


    if (name === 'password')
        return value.match(passwordRegexp) !== null;


    return false;
};