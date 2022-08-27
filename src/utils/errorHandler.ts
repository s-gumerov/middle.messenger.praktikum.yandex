import { router } from "./router";

export const errorHandler = (error: XMLHttpRequest) => {
    // if (!error.response) {
    //     return router.go('/500');
    // }
    const { reason } = JSON.parse(error.response);
    console.log('reason', error)
    return Promise.reject(error);
};