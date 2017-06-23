import {
    AUTH_SUCCESS,
    AUTH_ERROR,
    UNAUTH_USER,
    START_REFRESHING_AUTH_TOKEN,
    STOP_REFRESHING_AUTH_TOKEN,
    SET_TOKEN,
    DELETE_TOKEN,
    LOCAL_STORAGE_TOKEN_SET_FAIL
} from './types';

const initialState = {
    localStorageTokenFail: false,
    token: '',
    authenticated: false,
    error: '',
    localStorageError: '',
    isRefreshingToken: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return { ...state, error: '', authenticated: true };
        case AUTH_ERROR:
            return { ...state, error: action.payload.error, authenticated: false };
        case UNAUTH_USER:
            return { ...state, error: '', authenticated: false };
        case START_REFRESHING_AUTH_TOKEN:
            return { ...state, isRefreshingToken: true };
        case STOP_REFRESHING_AUTH_TOKEN:
            return { ...state, isRefreshingToken: false };
        case SET_TOKEN:
            return { ...state, token: action.payload.token };
        case DELETE_TOKEN:
            return { ...state, token: '' };
        case LOCAL_STORAGE_TOKEN_SET_FAIL:
            return { ...state, localStorageTokenFail: true, localStorageError: action.payload.localStorageError };
    }
    return state;
};
