import { isJsonString } from '@/utils/json';

describe('JSON util', () => {

    it('should return true when a valid JSON string is sent to it', () => {
        const validJson = JSON.stringify({
            testKey: 'testValue'
        });
        expect(isJsonString(validJson)).toEqual(true);
    });

    it('should return false when an invalid JSON string is sent to it', () => {
        expect(isJsonString('test')).toEqual(false);
    });

});
