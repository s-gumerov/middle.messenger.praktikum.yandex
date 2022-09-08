import { HTTPTransport } from "../services/HTTPTransport";
import env from '../utils/env';

interface IBaseApi {
    baseUrl?: string,
    path?: `/${string}`
    headers?: Record<string, string>
};


const headers = {
    'Content-type': 'application/json; charset=UTF-8',
};

const HTTP = new HTTPTransport();

export class BaseAPI {

    private _http: typeof HTTP;
    private _baseUrl: string;
    private _path: string;
    private _headers: Record<string, string>;

    constructor(config: IBaseApi = {}) {
        this._http = HTTP;
        this._baseUrl = config.baseUrl || env.HOST_API || '';
        this._path = config.path || '';
        this._headers = config.headers || headers;
    }

    private getPath() {
        return `${this._baseUrl}${this._path}`;
    }

    private handleOptions(newOptions?: Record<any, any>) {
        const options = newOptions || {};
        options.headers = newOptions?.headers || this._headers;
        return options;
    }

    private handleResponse(res: XMLHttpRequest) {
        if (res.response === 'OK') {
            return { ok: true };
        }

        const response = JSON.parse(res.response);

        if (response && Array.isArray(response)) {
            return response;
        }

        if (response && typeof response === 'object') {
            return response;
        }

        return response;
    }


    get headers() {
        return this._headers;
    }

    async request(endpoint: `/${string}`, options?: {}) {
        return this._http.get(this.getPath() + endpoint, this.handleOptions(options))
            .then(this.handleResponse);
    }

    async create(endpoint: `/${string}`, options?: {}) {
        return this._http.post(this.getPath() + endpoint, this.handleOptions(options))
            .then(this.handleResponse);
    }

    async update(endpoint: `/${string}`, options?: {}) {
        return this._http.put(this.getPath() + endpoint, this.handleOptions(options))
            .then(this.handleResponse);
    }

    async delete(endpoint: `/${string}`, options?: {}) {
        return this._http.delete(this.getPath() + endpoint, this.handleOptions(options))
            .then(this.handleResponse);
    }

}
