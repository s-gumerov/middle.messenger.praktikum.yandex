export const checkingAllFields = (obj: object) => {
    let completed = false;

    if (obj !== null) {
        for (const [, value] of Object.entries(obj)) {

            if (value === false) {
                completed = value;
                break;
            } else
                completed = value;
        };
    };
    return completed;
};
