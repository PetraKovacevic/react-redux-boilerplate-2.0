import {reducer as userReducer} from '../reducer';
import * as types from '../types';

describe('User reducer', () => {

    let state;
    beforeEach(() => {
        state = {
            fetching: false,
            list: []
        };
    });

    it('should return the initial state', () => {
        const expectedResult = state;
        expect(userReducer(undefined, {})).toEqual(expectedResult);
    });

    it('should handle the updateUsers action correctly', () => {
        const users = [
            {
                username: 'Test'
            }, {
                username: 'Test 2'
            }
        ];

        const action = {
            type: types.UPDATE_USERS,
            payload: {
                users
            }
        };

        const expectedResult = {
            fetching: false,
            list: users
        };

        expect(userReducer(state, action)).toEqual(expectedResult);
    });
});
