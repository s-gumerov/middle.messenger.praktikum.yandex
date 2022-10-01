import { router } from "./router";

export const errorHandler = (error: XMLHttpRequest | unknown) => {

    if (error instanceof XMLHttpRequest) {
        const { reason } = JSON.parse(error.response);
        if (!reason || reason === 'Cookie is not valid') {
            return;
        };
        if (reason === 'User already in system') {
            return router.go('/messenger');
        }
        alert(reason);
    }

    return Promise.reject(error);

};
