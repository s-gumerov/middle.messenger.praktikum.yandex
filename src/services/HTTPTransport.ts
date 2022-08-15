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
};

export default class HTTPTransport {
    public get = (url: string, options = {}) =>
        this.request(url, { ...options, method: Methods.GET });


    public post = (url: string, options = {}) =>
        this.request(url, { ...options, method: Methods.POST });


    public put = (url: string, options = {}) =>
        this.request(url, { ...options, method: Methods.PUT });


    public patch = (url: string, options = {}) =>
        this.request(url, { ...options, method: Methods.PATCH });


    public delete = (url: string, options = {}) =>
        this.request(url, { ...options, method: Methods.DELETE });


    request = (url: string, options: TRequestOptions) => {
        const {
            method = Methods.GET,
            headers = {},
            data,
            timeout = 5000,
        } = options;

        const query = method === Methods.GET ? queryStringify(data as TQueryStringify) : '';

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open(method, url + query);

            Object.entries(headers).forEach(([key, value]) =>
                xhr.setRequestHeader(key, value)
            );

            xhr.onload = () => {
                if (xhr.status >= 300)
                    reject(xhr);
                else
                    resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (method === Methods.GET || !data)
                xhr.send();
            else
                xhr.send(JSON.stringify(data));

        });
    };
}
