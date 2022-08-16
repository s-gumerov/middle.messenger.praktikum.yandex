export const addAttribute = (obj: object, selector: string, parent: HTMLElement) => {
    parent.querySelectorAll(selector).forEach(element => {
        Object.entries(obj).forEach(([key, value]) => {
            if (value !== undefined)
                element.setAttribute(key, value as string);
        });
    })

};
