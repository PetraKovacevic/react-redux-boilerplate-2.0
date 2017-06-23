import {
    AUTH_SUCCESS,
    AUTH_ERROR,
    UNAUTH_USER
} from './types';

/**
 * Register that an error has occurred with authentication.
 *
 * @param error
 * @returns {{type, payload: {authError: *}}}
 */
export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: {
            authError: error
        }
    };
}

export function authSuccess(token) {
    return function (dispatch) {
        dispatch({
            type: AUTH_SUCCESS,
            payload: {
                token
            }
        });

        // Save JWT token to local storage
        localStorage.setItem('token', token);
    };
}

export function unauthenticate(shouldRedirect = true) {
    return function (dispatch) {
        dispatch({ type: UNAUTH_USER });
        localStorage.removeItem('token');
    };
}
