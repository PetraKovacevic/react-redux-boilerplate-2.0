import {
    AUTH_SUCCESS,
    AUTH_ERROR,
    UNAUTH_USER,
    SET_TOKEN,
    DELETE_TOKEN,
    START_REFRESHING_AUTH_TOKEN,
    STOP_REFRESHING_AUTH_TOKEN,
    LOCAL_STORAGE_TOKEN_SET_FAIL
} from './types';

/**
 * Register that an error has occurred with authentication.
 *
 * @param error
 * @returns {object}
 */
export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: {
            error
        }
    };
}

export function authSuccess(token) {
    return function (dispatch) {
        dispatch({ type: AUTH_SUCCESS });
        dispatch(addToken(token));
        localStorage.setItem('token', token);

        // storage.set('token', token);
    };
}

export function addToken(token) {
    return {
        type: SET_TOKEN,
        payload: { token }
    };
}

export function removeToken() {
    return {
        type: DELETE_TOKEN
    };
}

export function startRefreshingToken() {
    return {
        type: START_REFRESHING_AUTH_TOKEN
    };
}

export function stopRefreshingToken() {
    return {
        type: STOP_REFRESHING_AUTH_TOKEN
    };
}

export function localStorageTokenFail(error) {
    return {
        type: LOCAL_STORAGE_TOKEN_SET_FAIL,
        payload: {
            localStorageError: error
        }
    };
}

export function unauthenticate(shouldRedirect = true) {
    return function (dispatch) {
        dispatch({ type: UNAUTH_USER });
        dispatch(removeToken());
    };
}
