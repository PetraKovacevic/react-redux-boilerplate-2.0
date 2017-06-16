import {
    USER_SIGNING_IN
} from './types';

const initialState = {
    isUserSigningIn: false
};

export default function loginReducer (state = initialState, action) {
    switch (action.type) {
        case USER_SIGNING_IN:
            return { ...state, isUserSigningIn: action.payload.isSiginingIn };
    }
    return state;
}
