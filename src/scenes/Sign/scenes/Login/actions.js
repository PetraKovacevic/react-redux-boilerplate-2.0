import * as api from './api';
import { authSuccess, authError } from '@/services/session/actions';
import { USER_SIGNING_IN } from './types';

export function isSiginingIn(signingIn) {
    return {
        type: USER_SIGNING_IN,
        payload: {
            isSiginingIn: signingIn
        }
    };
}

export function signIn({ email, password }) {
    return function (dispatch) {

        // Let the pages know that the user is being loaded
        dispatch(isSiginingIn(true));

        // Submit email/password to server
        api.signIn(email, password)
            .then(response => {
                let redirect = '/my-details';
                dispatch(authSuccess(
                    response,
                    {
                        user: {
                            userType: 'test'
                        }
                    },
                    redirect
                ));
                dispatch(isSiginingIn(false));
            })
            .catch(response => {
                dispatch(isSiginingIn(false));
                if (typeof response.data.message !== 'undefined') {
                    dispatch(authError(response.data.message));
                    return;
                }
                dispatch(authError(response.data.error));
            });
    };
}
