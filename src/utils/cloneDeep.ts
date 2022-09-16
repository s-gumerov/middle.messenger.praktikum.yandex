interface IStringIndex {
    [key: string]: any
}


function cloneDeep(obj: Record<string, any> = {}) {
    return (function _cloneDeep(item: Record<string, any> = {}) {

        if (item === null || typeof item !== "object") {
            return item;
        }


        if (item instanceof Array) {
            let copy: IStringIndex = [];

            item.forEach((_, i) => (copy[i] = _cloneDeep(item[i])));

            return copy;
        }


        if (item instanceof Object) {
            let copy: Record<string, any> = {};
            item = item as IStringIndex

            Object.keys(item).forEach(k => (copy[k] = _cloneDeep(item[k])));

            return copy;
        }

    })(obj);
}

export default cloneDeep