import { router } from "./router";

export const errorHandler = (error: XMLHttpRequest | unknown) => {

    if (error instanceof XMLHttpRequest) {
        const { reason } = JSON.parse(error.response);

        if (reason === 'User already in system') {
            router.go('/messenger');
        }
    }

    return Promise.reject(error);

};
