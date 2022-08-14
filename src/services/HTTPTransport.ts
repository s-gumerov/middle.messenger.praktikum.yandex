enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

type TQueryStringify = Record<string, string | number>;

type TRequestOptions = {
    method?: METHODS
    headers?: Record<string, string>
    timeout?: number
    data?: unknown
};

function queryStringify(data: TQueryStringify) {
    if (typeof data !== 'object')
        throw new Error('Data must be object');


    const keys = Object.keys(data);

    return keys.reduce((result, key, index) => {
        return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
    }, '?');
};

export default class HTTPTransport {
    public get = (url: string, options = {}) =>
        this.request(url, { ...options, method: METHODS.GET });


    public post = (url: string, options = {}) =>
        this.request(url, { ...options, method: METHODS.POST });


    public put = (url: string, options = {}) =>
        this.request(url, { ...options, method: METHODS.PUT });


    public patch = (url: string, options = {}) =>
        this.request(url, { ...options, method: METHODS.PATCH });


    public delete = (url: string, options = {}) =>
        this.request(url, { ...options, method: METHODS.DELETE });


    request = (url: string, options: TRequestOptions) => {
        const {
            method = METHODS.GET,
            headers = {},
            data,
            timeout = 5000,
        } = options;

        const query = method === METHODS.GET ? queryStringify(data as TQueryStringify) : '';

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

            if (method === METHODS.GET || !data)
                xhr.send();
            else
                xhr.send(JSON.stringify(data));

        });
    };
}
