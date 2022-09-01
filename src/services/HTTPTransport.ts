import { queryStringify } from "../utils/queryStringify";

enum Methods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
};

type TQueryStringify = Record<string, string | number>;

type TRequestOptions = {
    method?: Methods
    headers?: Record<string, string>
    timeout?: number
    data?: unknown
    withCredentials?: boolean
};

export class HTTPTransport {

    public get = (url: string, options = {}) => {

        return this.request(url, { ...options, method: Methods.GET }) as Promise<XMLHttpRequest>;
    }


    public post = (url: string, options = {}) => {
        return this.request(url, { ...options, method: Methods.POST }) as Promise<XMLHttpRequest>;

    }

    public put = (url: string, options = {}) => {
        console.log(options)
        return this.request(url, { ...options, method: Methods.PUT }) as Promise<XMLHttpRequest>;
    }

    public patch = (url: string, options = {}) =>
        this.request(url, { ...options, method: Methods.PATCH }) as Promise<XMLHttpRequest>;


    public delete = (url: string, options = {}) =>
        this.request(url, { ...options, method: Methods.DELETE }) as Promise<XMLHttpRequest>;


    request = (url: string, options: TRequestOptions) => {
        const {
            method = Methods.GET,
            headers = {},
            data,
            timeout = 5000,
            withCredentials = false,
        } = options;

        const query = method === Methods.GET && data ? queryStringify(data as TQueryStringify) : '';

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open(method, url + query);

            if (withCredentials) {
                xhr.withCredentials = true;
            }

            Object.entries(headers).forEach(([key, value]) =>
                xhr.setRequestHeader(key, value)
            );

            xhr.onload = () => {
                if (xhr.status >= 300) {
                    reject(xhr);
                } else {
                    resolve(xhr);
                }
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (method === Methods.GET || !data) {
                xhr.send();
            }
            else if (data instanceof FormData) {
                console.log('Formdata');
                // xhr.setRequestHeader('Content-Type', 'multipart/form-data;');
                console.log(data)

                xhr.send(data);
            }
            // else if (typeof data === 'object' && data.hasOwnProperty('avatar') && data.hasOwnProperty('chatId')) {

            //     console.log(data)

            //     xhr.send(data.avatar, da);
            // }


            else {
                console.log(typeof data);

                xhr.send(JSON.stringify(data));

            }

        });
    };
}
