import { browserHistory } from 'react-router';

import * as api from './api';
import { USER_SIGNING_IN } from './types';

import { authSuccess, authError } from '@/services/session/actions';
import { updateSignedInUserDetails } from '@/data/users/actions';

export function isSigningIn(signingIn) {
    return {
        type: USER_SIGNING_IN,
        payload: {
            isSigningIn: signingIn
        }
    };
}

export function signIn(email, password) {
    return function (dispatch) {

        // Let the pages know that the user is being loaded
        dispatch(isSigningIn(true));

        // Submit email/password to server
        api.authenticate(email, password)
            .then(response => {
                let redirect = '/my-details';

                // User was successfully authenticated, let redux know
                dispatch(authSuccess(response.data.token));

                // Save user details to redux store
                dispatch(updateSignedInUserDetails(response.data.data.user));

                dispatch(isSigningIn(false));

                // Redirect to a page...
                browserHistory.push(redirect);
            })
            .catch(response => {
                dispatch(isSigningIn(false));

                if (typeof response.data.message !== 'undefined') {
                    dispatch(authError(response.data.message));
                    return;
                }
                dispatch(authError(response.data.error));
            });
    };
}