export const setCompletedFieldsState = (obj: { [index: string]: any }, findProperties: string, state: boolean) => {

    for (let [properties] of Object.entries(obj)) {
        if (properties === findProperties)
            obj[properties] = state;

        if (findProperties === 'all')
            obj[properties] = true;
    };
};
