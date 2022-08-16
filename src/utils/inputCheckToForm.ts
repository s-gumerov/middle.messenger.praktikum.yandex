import { setCompletedFieldsState } from "./setCompletedFieldsState";
import { validate } from "./validate";

export const inputCheckToForm = (formSelector: string, completedFields: object) => {
    const form = document.querySelector(`.${formSelector}`);
    if (form)
        form.querySelectorAll('input').forEach(element => {
            const { value, name } = element as HTMLInputElement;
            const fieldCompleted = validate(name, value);
            setCompletedFieldsState(completedFields, name, fieldCompleted);
        });
};
