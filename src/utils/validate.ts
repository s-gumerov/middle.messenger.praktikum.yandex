import { EMAIL_REGEXP, LOGIN_REGEXP, FIRST_NAME_AND_SECOND_NAME_INPUT_TITLE_REGEXP, PHONE_REGEXP, PASSWORD_REGEXP } from './regularExpressions';

export const validate = (name: string, value: string): boolean => {

    if (name === 'email')
        return value.match(EMAIL_REGEXP) !== null;

    if (name === 'login')
        return value.match(LOGIN_REGEXP) !== null;

    if (name === 'first_name')
        return value.match(FIRST_NAME_AND_SECOND_NAME_INPUT_TITLE_REGEXP) !== null;

    if (name === 'second_name')
        return value.match(FIRST_NAME_AND_SECOND_NAME_INPUT_TITLE_REGEXP) !== null;

    if (name === 'display_name')
        return value.length > 1;

    if (name === 'phone')
        return value.match(PHONE_REGEXP) !== null;

    if (name === 'password')
        return value.match(PASSWORD_REGEXP) !== null;

    if (name === 'old_password')
        return value.match(PASSWORD_REGEXP) !== null;


    if (name === 'new_password')
        return value.match(PASSWORD_REGEXP) !== null;

    if (name === 'again_password')
        return value.match(PASSWORD_REGEXP) !== null;

    if (name === 'message')
        return value.length > 1;

    return false;
};
