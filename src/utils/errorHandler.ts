import { router } from "./router";

export const errorHandler = (error: XMLHttpRequest) => {
    const { reason } = JSON.parse(error.response);
    if (reason === 'User already in system') {
        router.go('/messenger')
    } else {
        alert(reason)
        return Promise.reject(error);
    }

};
