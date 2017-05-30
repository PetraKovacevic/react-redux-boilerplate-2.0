import { required, email } from '@/utils/validation';
import { strings, getString } from '@/strings';

describe('Validation', () => {

    describe('Required', () => {
        it('should return the error from the string constants file', () => {
            expect(required('')).toEqual(getString(strings.requiredValue));
        });
    });

    describe('Email', () => {
        it('should return the error from the string constants file when an invalid email is used', () => {
            expect(email('steve@nodotcom')).toEqual(getString(strings.emailError));
        });
    });

});
