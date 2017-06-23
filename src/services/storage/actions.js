import {
    ERROR_RETRIEVING_DATA,
    ERROR_STORING_DATA,
    CLEAR_STORAGE_ERRORS
} from './types';

export function retrieveError(errorMessage) {
    return {
        type: ERROR_RETRIEVING_DATA,
        payload: {
            errorMessage
        }
    };
}

export function storageError(errorMessage) {
    return {
        type: ERROR_STORING_DATA,
        payload: {
            errorMessage
        }
    };
}

export function clearErrors() {
    return {
        type: CLEAR_STORAGE_ERRORS
    };
}
