
import { get } from '../index';

describe('Storage service', () => {

    let key, value, badKey;

    beforeEach(() => {
        // these values are mocked in the store in /test/__mocks__/localStorage.js
        key = 'testKey';
        value = 'testValue';
        badKey = 'testBadKeyThatDoesNotExist';
    });

    it('should return the value for a given key if it exists', () => {
        expect(get(key)).toEqual(value);
    });

    it('should return null if the key does not exist', () => {
        expect(get(badKey)).toEqual(null);
    });

});
