import {
    ERROR_RETRIEVING_DATA,
    ERROR_STORING_DATA,
    CLEAR_STORAGE_ERRORS
} from './types';

const initialState = {
    retrieveFail: false,
    storingFail: false,
    errorMessage: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ERROR_RETRIEVING_DATA:
            return { ...state, errorMessage: action.payload.error, retrieveFail: true };
        case ERROR_STORING_DATA:
            return { ...state, errorMessage: action.payload.error, storingFail: true };
        case CLEAR_STORAGE_ERRORS:
            return { ...state, errorMessage: '', retrieveFail: false, storingFail: false };
    }
    return state;
};
