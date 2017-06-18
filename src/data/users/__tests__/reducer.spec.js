import {
    reducer as userReducer
} from '../reducer';

import {
    updateUsers,
} from '../actions';

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
            { username: 'Test' },
            { username: 'Test 2' }
        ];
        state.list = users;
        const expectedResult = state;

        expect(userReducer(state, updateUsers(users))).toEqual(expectedResult);
    });
});
