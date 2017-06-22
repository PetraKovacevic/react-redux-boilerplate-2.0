import axios from 'axios';
import jwtDecode from 'jwt-decode';
import * as api from '@/services/api';

const apiEndpoints = {
    auth: 'auth/jwt/login',
    refresh: 'auth/jwt/refresh'
};

/**
 *
 */
export function getToken() {
    return localStorage.getItem('token');
}

/**
 * Tries to decode jwt and checks the expiration date
 *
 * @returns {boolean}
 */
export function isTokenValid() {
    let token = localStorage.getItem('token');
    if (token) {

        try {
            let decoded = jwtDecode(localStorage.getItem('token'));

            if( typeof decoded.exp === 'undefined' ) {
                return false;
            }

            let date = new Date(0); // The 0 here is the key, which sets the date to the epoch
            date.setUTCSeconds(decoded.exp);

            return date.valueOf() > new Date().valueOf();

        } catch(error) {
            return false;
        }
    }

    return false;
}

/**
 * Checks if the token has or is about to expire.
 *
 * @returns {boolean}
 */
export function shouldRefreshToken() {
    let token = localStorage.getItem('token');

    if (token) {

        try {
            let decoded = jwtDecode(localStorage.getItem('token'));

            if( typeof decoded.exp === "undefined" ) {
                return false;
            }

            let date = new Date(0); // The 0 here is the key, which sets the date to the epoch
            date.setUTCSeconds(decoded.exp);

            let now = new Date();

            return now.valueOf() < date.valueOf() && now.valueOf() > date.setMinutes(date.getMinutes() - 10);

        } catch(error) {
            return false;
        }
    }

    return false;
}

/**
 * Refreshes the token
 * @returns {axios.Promise}
 */
export const refreshToken = () => {
    return api.get(apiEndpoints.refresh);
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
 * Set up interceptors on axios.
 *
 * @param store
 */
export const configureAxios = (store) => {

    axios.interceptors.request.use((config) => {
        // get token from store
        let token = getToken();

        if (token) {
            config.headers['authorization'] = 'Bearer ' + token;
        }

        return config;

    }, (err) => {
        return Promise.reject(err);
    });

    axios.interceptors.response.use(undefined, (error) => {
        // Perform actions for all responses that meet certain criteria (error codes)
        if (parseInt(error.status) === 401) {
            // e.g log out user
        } else if (parseInt(error.status) === 403) {
            // e.g dispatch some sort of error
        } else if (parseInt(error.status) === 500) {
            // e.g call email service api to alert developer
        }

        return Promise.reject(error);
    });
};

