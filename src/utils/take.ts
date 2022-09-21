import { ValidationError } from "./ValidationError";

/*
 Функция, которая создаёт часть массива с n элементами, взятыми с начала. Необходимо валидировать входные значения. В случае ошибки — выбросывается исключение ValidationError: bad value
 */
export function take(list: number[], num: number = 1): number[] {
    if (!Array.isArray(list) || typeof num !== 'number') {
        throw new ValidationError('bad value');
    }

    return list.slice(0, num);
}

export default take;
