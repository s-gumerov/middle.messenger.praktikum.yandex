import { validate } from "./validate";
import { setComletedFieldsState } from "./setComletedFieldsState";

export const validateAndsetComletedFields = (target: HTMLInputElement, completedFields: object) => {
    const { value, name } = target;
    const fieldCompleted = validate(name, value);
    setComletedFieldsState(completedFields, name, fieldCompleted);
};