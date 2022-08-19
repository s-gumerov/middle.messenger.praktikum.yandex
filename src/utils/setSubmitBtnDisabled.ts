import { checkingAllFields } from "./checkingAllFields";
import { setCompletedFieldsState } from "./setCompletedFieldsState";

export const setSubmitBtnDisabled = (btnClass: string, completedFields: object) => {
    const state = checkingAllFields(completedFields);

    if (state === true)
        setCompletedFieldsState(completedFields, 'all', true)

    const btn = document.querySelector(`.${btnClass}`);

    if (btn)
        state ? btn.removeAttribute('disabled') : btn.setAttribute('disabled', 'true');
};
