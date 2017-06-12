

// TODO: @Petra, I think we should move these, split up into the Login scene, some should live here
// Signout can probably stay here too

import { browserHistory } from 'react-router';
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

export function authSuccess(token, user, redirect = '/my-details') {
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
        localStorage.setItem('currentUserDetails', JSON.stringify({ user }));

        // Redirect to a page...
        if (redirect) {
            browserHistory.push(redirect);
        }
    };
}



export function signUpUser({ company_name, first_name, last_name, email }) {
    return function (dispatch) {
        let password = generatePassword(); // Create a random password so that the user can login

        // Need to share the data with the second promise
        let combinedUserData = {};

        AuthApi.register({ name: company_name }, { first_name, last_name, email, password })
            .then(response => {
                localStorage.setItem('token', response.data.token);
                dispatch(authSuccess(
                    response.data.token,
                    {
                        user: response.data.data.user
                    },
                    redirect
                ));
            })
            .catch(error => {
                dispatch({
                    type: AUTH_ERROR
                });

                let registrationErrors = '';
                if (!_.isEmpty(error.data.errors)) {
                    registrationErrors = _.mapKeys(error.data.errors, function (value, key) {
                        return key.split('.')[1];
                    });
                }

                if (typeof error.data.message !== 'undefined') {
                    dispatch(authError(error.data.message, registrationErrors));
                } else {
                    dispatch(authError(error.data.error, registrationErrors));
                }
            });
    };
}

export function signOutUser(shouldRedirect = true) {
    return function (dispatch) {
        dispatch({ type: UNAUTH_USER });
        localStorage.removeItem('token');

        if (shouldRedirect) {
            browserHistory.push('/signin');
        }
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
