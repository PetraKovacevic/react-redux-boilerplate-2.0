import * as api from '@/services/api';
import { getToken } from './services/token';
import axios from 'axios';

const apiEndpoints = {
    auth: 'auth/jwt/login',
    refresh: 'auth/jwt/refresh'
};

/**
 *
 * @param username
 * @param password
 * @returns {axios.Promise}
 */

export const authenticate = (username, password) => {

    let config = {
        auth: {
            username,
            password
        }
    };

    return api.get(apiEndpoints.auth, config);
};

/**
 * Refreshes the token
 * @returns {axios.Promise}
 */
export const refreshToken = () => {
    return api.get(apiEndpoints.refresh);
};

export const configureAxios = (store) => {

    axios.interceptors.request.use((config) => {
        // get token from store
        let token = getToken();

        // TODO: change this so it can work with AWS or Laravel or whatever
        if (token) {
            config.headers['authorization'] = 'Bearer ' + token;
        }

        return config;

    }, (err) => {
        return Promise.reject(err);
    });

    axios.interceptors.response.use(undefined, (error) => {
        if (parseInt(error.status) === 401) {
            // store.dispatch(signOutUser());
        } else if (parseInt(error.status) === 403) {
            // dispatch some sort of errer
        }

        return Promise.reject(error);
    });
}

