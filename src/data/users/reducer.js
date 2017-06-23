import {
    FETCHING_USERS,
    UPDATE_USERS,
    UPDATE_SIGNED_IN_USER
} from './types';

const initialState = {
    fetching: false,
    list: [],
    signedInUser: {}
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_USERS:
            return { ...state, fetching: action.payload.fetching };
        case UPDATE_USERS:
            return { ...state, list: action.payload.users };
        case UPDATE_SIGNED_IN_USER:
            return { ...state, signedInUser: action.payload.user};
    }
    return state;
};
