import {
    FETCHING_USERS,
    UPDATE_USERS
} from '../types';

import {
    fetching,
    updateUsers
} from '../actions';

describe('User actions', () => {

    describe('set fetching flag', () => {
        it('should pass through the correct value', () => {
            const testFlag = true;
            const expectedResult = {
                type: FETCHING_USERS,
                payload: {
                    fetching: testFlag
                }
            };
            expect(fetching(testFlag)).toEqual(expectedResult);
        });
    });

    describe('update user list', () => {
        it('should pass through the array of users', () => {
            const testUsers = [
                { username: 'Test' },
                { username: 'Test 2' }
            ];
            const expectedResult = {
                type: UPDATE_USERS,
                payload: {
                    list: testUsers
                }
            };
            expect(updateUsers(testUsers)).toEqual(expectedResult);
        });
    });


});
