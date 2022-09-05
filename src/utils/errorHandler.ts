import { router } from "./router";

export const errorHandler = (error: XMLHttpRequest) => {
    if (typeof error.response === 'undefined') {
        return alert('Произошла сетевая ошибка. '
            + 'Это может быть проблема CORS или слабое подключение к Интернету.')
    }
    const { reason } = JSON.parse(error.response);
    if (reason === 'User already in system') {
        router.go('/messenger')
    } else {
        alert(reason)
        return Promise.reject(error);
    }

};
