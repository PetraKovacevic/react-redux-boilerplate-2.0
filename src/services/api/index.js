import axios from 'axios';
import appConfig from './config';

export default class APIUtil {

    constructor(root = appConfig.apiUrl) {
        this.root = root;
    }

    head(path) {
        return head(path, this.root);
    }

    get(path, params) {
        return get(path, params, this.root);
    }

    post(path, data, config) {
        return post(path, data, config, this.root);
    }

    put(path, data, config) {
        return put(path, data, config, this.root);
    }

    patch(path, data, config) {
        return patch(path, data, config, this.root);
    }

    delete(path, data) {
        return remove(path, data, this.root);
    }

}
/**
 * Get request
 *
 * @param path
 * @returns {*}
 */
export function head(path, root = appConfig.apiUrl) {
    return axios.head(`${root}/${path}`);
}

/**
 * Get request
 *
 * @param path
 * @returns {*}
 */
export function get(path, params, root = appConfig.apiUrl) {
    return axios.get(`${root}/${path}`, { params });
}

/**
 * Post request
 *
 * @param path
 * @param data
 * @param config
 * @returns {axios.Promise}
 */
export function post(path, data, config = {}, root = appConfig.apiUrl) {
    return axios.post(`${root}/${path}`, data, config);
}


/**
 *
 * @param path
 * @param data
 * @param config
 * @returns {axios.Promise}
 */
export function put(path, data, config = {}, root = appConfig.apiUrl) {
    return axios.put(`${root}/${path}`, data, config);
}

/**
 * Patch request
 *
 * @param path
 * @param data
 * @param config
 * @param root
 * @returns {axios.Promise}
 */
export function patch(path, data, config = {}, root = appConfig.apiUrl) {
    return axios.patch(`${root}/${path}`, data, config);
}

/**
 * Delete request
 *
 * @param path
 * @param data
 * @param root
 * @returns {axios.Promise}
 */
export function remove(path, data = null, root = appConfig.apiUrl) {
    let config = {
        data: data
    };

    return axios.delete(`${root}/${path}`, config);
}
