import { EmailRegexp, LoginRegexp, FirstNameAndSecondNameRegexp, PhoneRegexp, PasswordRegexp } from './regularExpressions';

export const validate = (name: string, value: string): boolean => {

    if (name === 'email')
        return value.match(EmailRegexp) !== null;

    if (name === 'login')
        return value.match(LoginRegexp) !== null;

    if (name === 'first_name')
        return value.match(FirstNameAndSecondNameRegexp) !== null;

    if (name === 'second_name')
        return value.match(FirstNameAndSecondNameRegexp) !== null;

    if (name === 'display_name')
        return value.match(FirstNameAndSecondNameRegexp) !== null;

    if (name === 'phone')
        return value.match(PhoneRegexp) !== null;

    if (name === 'password')
        return value.match(PasswordRegexp) !== null;

    if (name === 'old_password')
        return value.match(PasswordRegexp) !== null;

    if (name === 'new_password')
        return value.match(PasswordRegexp) !== null;

    if (name === 'again_password')
        return value.match(PasswordRegexp) !== null;


    return false;
};
