import * as api from './api';
import * as userStorage from './services/storage';
import {
    FETCHING_USERS,
    UPDATE_USERS,
    UPDATE_SIGNED_IN_USER
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
 * Updates the list of users in Redux
 *
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

/**
 * Updates the details of the signed in user in redux.
 *
 * @param user
 * @returns {{type, payload: {uuid: *, userType: *}}}
 */
export function updateCurrentUserDetails(user) {
    userStorage.setCurrentUser(user);

    return {
        type: UPDATE_SIGNED_IN_USER,
        payload: {
            user
        }
    };
}

