import {
    AUTH_SUCCESS,
    AUTH_ERROR,
    UNAUTH_USER,
    START_REFRESHING_AUTH_TOKEN,
    STOP_REFRESHING_AUTH_TOKEN,
    SET_TOKEN,
    DELETE_TOKEN
} from './types';

const initialState = {};

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
    }
    return state;
};
