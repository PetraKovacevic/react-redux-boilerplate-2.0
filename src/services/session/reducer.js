import {
    AUTH_SUCCESS,
    AUTH_ERROR,
    UNAUTH_USER,
    START_REFRESHING_AUTH_TOKEN,
    STOP_REFRESHING_AUTH_TOKEN
} from './types';

const initialState = {
    authenticated: false,
    user: {},
    token: null,
    authError: '',
    isRefreshingToken: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return { ...state, authError: '', authenticated: true, user: action.payload.user, token: action.payload.token };
        case AUTH_ERROR:
            return { ...state, authError: action.payload.error, authenticated: false, user: {} };
        case UNAUTH_USER:
            return { ...state, authError: '', authenticated: false, user: {} };
        case START_REFRESHING_AUTH_TOKEN:
            return { ...state, isRefreshingToken: true };
        case STOP_REFRESHING_AUTH_TOKEN:
            return { ...state, isRefreshingToken: false };
    }
    return state;
};
