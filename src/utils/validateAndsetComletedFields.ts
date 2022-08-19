import { validate } from "./validate";
import { setCompletedFieldsState } from "./setCompletedFieldsState";

export const validateAndsetComletedFields = (target: HTMLInputElement, completedFields: object) => {
    const { value, name } = target;
    const fieldCompleted = validate(name, value);
    setCompletedFieldsState(completedFields, name, fieldCompleted);
};