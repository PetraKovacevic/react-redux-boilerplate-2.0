import axios from 'axios';
import appConfig from './config';

class APIUtil {

    constructor(root = appConfig.apiUrl) {
        this.root = root;
    }

    /**
     * Get request
     *
     * @param path
     * @returns {*}
     */
    head(path) {
        return axios.head(`${this.root}/${path}`);
    }

    /**
     * Get request
     *
     * @param path
     * @returns {*}
     */
    get(path) {
        return axios.get(`${this.root}/${path}`);
    }

    /**
     * Post request
     *
     * @param path
     * @param data
     * @param config
     * @returns {axios.Promise}
     */
    post(path, data, config = {}) {
        return axios.post(`${this.root}/${path}`, data, config);
    }


    /**
     *
     * @param path
     * @param data
     * @param config
     * @returns {axios.Promise}
     */
    put(path, data, config = {}) {
        return axios.put(`${this.root}/${path}`, data, config);
    }

    /**
     *
     * @param path
     * @param data
     * @param config
     * @returns {axios.Promise}
     */
    patch(path, data, config = {}) {
        return axios.patch(`${this.root}/${path}`, data, config);
    }

    /**
     * Delete request
     *
     * @param path
     * @param data
     * @returns {axios.Promise}
     */
    delete(path, data = null) {
        let config = {
            data: data
        };

        return axios.delete(`${this.root}/${path}`, config);
    }
}

export default APIUtil;
