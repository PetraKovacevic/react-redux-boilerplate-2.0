import {
    FETCHING_USERS,
    UPDATE_USERS
} from './types';

const initialState = {
    fetching: false,
    list: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_USERS:
            return { ...state, fetching: action.payload.fetching };
        case UPDATE_USERS:
            return { ...state, list: action.payload.users };
    }
    return state;
};
