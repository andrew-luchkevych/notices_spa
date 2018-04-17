import HttpMethods from './httpMethods';
const FETCH_TIMEOUT = 15000
/**
 * The base class for using XML Http Request
 */
export default class Http {
    /*
     * Enum of http methods
     * @readonly @type {HttpMethods}
     */
    methods = HttpMethods;

    /*
     * Makes Http request
     * @param {string} url Url where request should be sent
     * @param {string} method HTTP method for request
     * @param {any} params The data for request
     * @param {Headers} additionalHeaders The additional headers,
     * that should be applied in request
     * @return {Promise<any>} Returns promise:
     * - Resolve on HTTP code on success
     * - Redirects to login page if unauthorize
     * - Reject on failure
     */
    request = (url: string, method: HttpMethods, params?: any, appendHeaders: boolean = true, additionalHeaders?: Array<Array<string>>) => {
        params = params
            ? params
            : {};

        return new Promise((resolve, reject) => {
            let headers = new Headers();
            if(appendHeaders) {
                if(!(params instanceof FormData)) {
                    headers.append('Content-Type', 'application/json');
                }
                headers.append('Accept', 'application/json');
                let token = localStorage.getItem('token');
                if (token) {
                    headers.set('Authorization', `Bearer ${token}`);
                }
                if (additionalHeaders) {
                    for (let header of additionalHeaders) {
                        headers.set(header[0], header[1]);
                    }
                }
            }
            let fetchUrl = url.indexOf('//') > -1
                ? url
                : process.env.REACT_APP_API_URL + url;
            let args = {
                headers: headers,
                method: method,
                body: undefined,
                //credentials: 'include',
            }
            if (method === this.methods.GET || method === this.methods.OPTIONS || method === this.methods.HEAD) {
                if (typeof params === 'object') {
                    const keys = Object.keys(params);
                    if (keys.length) {
                        fetchUrl += '?';
                        fetchUrl += keys.map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
                    }
                }
            } else {
                args.body = (params instanceof FormData)
                    ? params
                    : JSON.stringify(params);
            }
            console.log('Fetch Url: ', fetchUrl);
            console.log('Fetch Args: ', args);
            let timedout = false;
            /*const fetchTimeout = window.setTimeout(() => {
                timedout = true;
                reject(new Error('Request timed out'));
                alert('Server Error!\r\nServer did not respond in time!');
            }, FETCH_TIMEOUT);*/
            fetch(fetchUrl, args).then(response => {
                /*if (timedout) 
                    return;
                window.clearTimeout(fetchTimeout);*/
                console.log('Fetch response', response);
                if (response.status > 199 && response.status < 400) {
                    if(method == this.methods.HEAD) {
                        return resolve(response);
                    }
                    response
                        .json()
                        .then(data => resolve(data))
                        .catch(e => reject(e));
                } else if (response.status === 401) {
                    if (url == '/oauth/token') {
                        reject(response);
                    }
                    console.warn('Unauthorize!');
                    // here should be redirect
                    return;
                } else if (response.status === 404) {
                    // here should be redirect
                    reject(response);
                    return;
                } else {
                    reject(response);
                }
            }).catch(e => {
                if (timedout) 
                    return;
                //window.clearTimeout(fetchTimeout);
                console.warn('Fetch error:', e);
                reject(e);
            });
        })
    }

    /*
     * HTTP GET request
     * @param {url} url Where request should be sent
     * @param {any} params Data that should be sent in request
     */
    get = (url, params?) => this.request(url, this.methods.GET, params);

    /*
     * HTTP POST request
     * @param {url} url Where request should be sent
     * @param {any} params Data that should be sent in request
     */
    post = (url, params?) => this.request(url, this.methods.POST, params);

    /*
     * HTTP PATCH request
     * @param {url} url Where request should be sent
     * @param {any} params Data that should be sent in request
     */
    patch = (url, params?) => this.request(url, this.methods.PATCH, params);

    /*
     * HTTP PUT request
     * @param {url} url Where request should be sent
     * @param {any} params Data that should be sent in request
     */
    put = (url, params?) => this.request(url, this.methods.PUT, params);

    /*
     * HTTP DELETE request
     * @param {url} url Where request should be sent
     * @param {any} params Data that should be sent in request
     */
    delete = (url, params?) => this.request(url, this.methods.DELETE, params);

    head = (url, params, appendHeaders) => this.request(url, this.methods.HEAD, params, appendHeaders);
}