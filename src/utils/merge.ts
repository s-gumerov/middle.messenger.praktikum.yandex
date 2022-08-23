type Indexed<T = unknown> = {
    [key in string]: T;
};

export const merge = (lhs: Indexed, rhs: Indexed): Indexed => {
    for (let key in rhs) {
        if (!rhs.hasOwnProperty(key)) {
            continue;
        }

        try {
            if (rhs[key] instanceof Object) {
                rhs[key] = merge(lhs[key] as Indexed, rhs[key] as Indexed);
            } else {
                lhs[key] = rhs[key];
            }
        } catch (e) {
            lhs[key] = rhs[key];
        }
    }

    return lhs;
}
