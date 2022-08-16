export const PASSWORD_REGEXP = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}/g
export const PHONE_REGEXP = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){7,17}\d$/;
export const LOGIN_REGEXP = /^[a-zA-Z][a-zA-Z0-9-_\.]{3,20}$/;
export const FIRST_NAME_AND_SECOND_NAME_REGEXP = /^[A-ZА-Я][A-ZА-Яa-zа-я0-9-\.]{3,20}$/
export const EMAIL_REGEXP = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}/;
