export const LOGIN_REGEXP = /^[a-zA-Z0-9](?=.*[a-zA-z])[a-zA-Z0-9-_\.]{2,20}$/;
export const PASSWORD_REGEXP = /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*()_+=/?><.\.]{3,41}$/;
export const PHONE_REGEXP = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){7,17}\d$/;
export const FIRST_NAME_AND_SECOND_NAME_INPUT_TITLE_REGEXP = /^[A-ZА-Я][A-ZА-Яa-zа-я0-9-\.]{3,20}$/;
export const DISPLAY_NAME_REGEXP = /[\w\W]{1,10}/;
export const EMAIL_REGEXP = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}/;
