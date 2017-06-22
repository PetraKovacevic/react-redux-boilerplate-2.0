

// TODO: @Petra, I think we should move these, split up into the Login scene, some should live here
// Signout can probably stay here too

import _ from 'lodash';

// import { generatePassword, getCurrentUserDetails, getAllowedRoutes, isRouteAllowed } from '../utils/utils';
import {
    AUTH_SUCCESS,
    AUTH_ERROR,
    UNAUTH_USER,
    DID_CHANGE_PASSWORD,
    RESET_DID_CHANGE_PASSWORD,
    USER_SIGNING_IN,
    USER_SIGNING_OUT
} from './types';

export function authError(error, registrationErrors = '') {
    return {
        type: AUTH_ERROR,
        payload: {
            error,
            registrationErrors
        }
    };
}

export function authSuccess(token, user) {
    return function (dispatch) {
        dispatch({
            type: AUTH_SUCCESS,
            payload: {
                user,
                token
            }
        });

        // Save JWT token and user details to local storage
        localStorage.setItem('token', token);
        localStorage.setItem('currentUserDetails', JSON.stringify(user));
    };
}

export function unauthenticate(shouldRedirect = true) {
    return function (dispatch) {
        dispatch({ type: UNAUTH_USER });
        localStorage.removeItem('token');
    };
}

export function updateAuthUserState(updatedUser) {

    // Update auth state and user details in state
    let
        userDetails = getCurrentUserDetails(),
        user = userDetails.user
        ;

    user = { ...user, ...updatedUser };
    userDetails = { ...userDetails, user };

    localStorage.setItem('currentUserDetails', JSON.stringify(userDetails));
    return { type: AUTH_SUCCESS, payload: userDetails };
}

export function updateCurrentUserState(user) {
    localStorage.setItem('currentUserDetails', JSON.stringify(user));
    return { type: AUTH_SUCCESS, payload: user };
}


export function didChangePassword() {
    return {
        type: DID_CHANGE_PASSWORD
    };
}

export function resetDidChangePassword() {
    return {
        type: RESET_DID_CHANGE_PASSWORD
    };
}
