import {
    DELETE_TOKEN,
    AUTH_ERROR
} from '../types';

import {
    removeToken,
    authError
} from '../actions';

describe('Session actions', () => {

    describe('remove auth token from Redux', () => {
        it('should return the correct action type', () => {
            const expectedResult = {
                type: DELETE_TOKEN
            };
            expect(removeToken()).toEqual(expectedResult);
        });
    });

    describe('set an auth error and pass through error message', () => {
        it('should return the correct action type and payload', () => {
            const testErrorMessage = 'There was an error';
            const expectedResult = {
                type: AUTH_ERROR,
                payload: {
                    error: testErrorMessage
                }
            };
            expect(authError(testErrorMessage)).toEqual(expectedResult);
        });
    });

    // Add the rest!

});
