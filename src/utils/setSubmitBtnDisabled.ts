export const setSubmitBtnDisabled = (btnClass: string, disabledState: boolean) => {
    const btn = document.querySelector(`.${btnClass}`);

    if (btn)
        disabledState ? btn.removeAttribute('disabled') : btn.setAttribute('disabled', 'true');
};
