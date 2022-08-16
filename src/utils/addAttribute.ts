export const addAttribute = (obj: object, tag: string, container: HTMLElement) => {
    container.querySelectorAll(tag).forEach(element => {
        Object.entries(obj).forEach(([key, value]) => {
            if (tag === 'button' && key === 'disabled' && value === false)
                return

            if (value !== undefined)
                element.setAttribute(key, value as string);
        });
    })

};
