import * as api from './api';
import {
    FETCHING_USERS,
    UPDATE_USERS
} from './types';

/**
 * set the Redux state of whether or not
 * we're fetching from the API
 * @param {Boolean} isFetching
 */
export function fetching(isFetching) {
    return {
        type: FETCHING_USERS,
        payload: {
            fetching: isFetching
        }
    };
}

/**
 * updates the list of users in Redux
 * @param {Array} users
 * @return {Object}
 */
export function updateUsers(users) {
    return {
        type: UPDATE_USERS,
        payload: {
            list: users
        }
    };
}

/**
 * Retrieve a list of users from the API
 * and save to Redux state
 * @return {Function} Thunk middleware
 */
export function getUsers() {
    return function (dispatch) {
        dispatch(fetching(true));
        api.get()
            .then(response => {
                dispatch(updateUsers(response.data));
                dispatch(fetching(false));
            })
            .catch(reponse => {
                dispatch(fetching(false));
            });
    };
}

// todo: fix
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
