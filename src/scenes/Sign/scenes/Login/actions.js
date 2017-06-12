import * as api from './api';
import { authSuccess, authError } from '@/services/session/actions';
import { USER_SIGNING_IN } from './types';

export function signIn({ email, password }) {
    return function (dispatch) {

        // Let the pages know that the user is being loaded
        dispatch({
            type: USER_SIGNING_IN
        });

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
            })
            .catch(response => {
                if (typeof response.data.message !== 'undefined') {
                    dispatch(authError(response.data.message));
                    return;
                }
                dispatch(authError(response.data.error));
            });
    };
}
