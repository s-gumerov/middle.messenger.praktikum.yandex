export const passwordRegexp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}/g
export const phoneRegexp = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){7,17}\d$/;
export const loginRegexp = /^[a-zA-Z][a-zA-Z0-9-_\.]{3,20}$/;
export const firstNameAndSecondNameRegexp = /^[A-ZА-Я][A-ZА-Яa-zа-я0-9-\.]{3,20}$/
export const emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}/;