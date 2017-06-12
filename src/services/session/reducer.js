import {
    AUTH_SUCCESS,
    AUTH_ERROR,
    UNAUTH_USER,
    START_REFRESHING_AUTH_TOKEN,
    STOP_REFRESHING_AUTH_TOKEN,
    USER_SIGNING_IN,
    USER_SIGNING_OUT
} from './types';

export default function (state = { user: { userType: '' } }, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return { ...state, error: '', registrationError: '', authenticated: true, user: action.payload.user, token: action.payload.token };
        case AUTH_ERROR:
            return { ...state, error: action.payload.error, registrationErrors: action.payload.registrationErrors, authenticated: false, user: {} };
        case UNAUTH_USER:
            return { ...state, error: '', registrationError: '', authenticated: false, user: {} };
        case USER_SIGNING_IN:
            return { ...state, isUserSigningIn: true };
        case START_REFRESHING_AUTH_TOKEN:
            return { ...state, isRefreshingToken: true };
        case STOP_REFRESHING_AUTH_TOKEN:
            return { ...state, isRefreshingToken: false };
    }
    return state;
}
