export function formatLastMsg(str: string) {
    const regEx = /^(\d{2})(\d{2})?(\d{4})?/g;
    return str.slice(11, 19)
        .replaceAll(':', '')
        .replaceAll('.', '')
        .replace(regEx, (p1, p2, p3) => {
            return `${(p1) ? p2 + ':' : ''}${(p3) ? p3 + ':' : ''}`;
        })
};
