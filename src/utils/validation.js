import { strings, getString } from '@/strings';

const isEmpty = value => value === undefined || value === null || value === '';
const join = (rules) => (value, data) => rules.map(rule => rule(value, data)).filter(error => !!error)[0];

export const validationStrings = {
    emailError: getString(strings.emailError),
    requiredValue: getString(strings.requiredValue)
};

import moment from 'moment';

// very simple email check for frontend validation
export function email(value) {
    if (!isEmpty(value) && !value.trim().match(/^.+@.+\..+$/)) {
        return validationStrings.emailError;
    }
}

export function required(value) {
    if (isEmpty(value)) {
        return validationStrings.requiredValue;
    }
}

export function minLength(min) {
    return value => {
        if (!isEmpty(value) && value.length < min) {
            return `Must be at least ${min} characters`;
        }
    };
}

export function maxLength(max) {
    return value => {
        if (!isEmpty(value) && value.length > max) {
            return `Must be no more than ${max} characters`;
        }
    };
}

export function integer(value) {
    if (!isEmpty(value) && !Number.isInteger(Number(value))) {
        return 'Must be an integer';
    }
}

export function alphanumeric(value) {
    if (!isEmpty(value) && !value.trim().match(/^[0-9a-z]+$/i)) {
        return 'Must be letters or numbers';
    }
}

export function currency(value) {
    if (!isEmpty(value) && !value.trim().match(/^\d+(\.\d{0,2})?$/)) {
        return 'Must be decimal to two places';
    }
}

export function oneOf(enumeration) {
    return value => {
        if (!~enumeration.indexOf(value)) {
            return `Must be one of: ${enumeration.join(', ')}`;
        }
    };
}

export function match(field) {
    return (value, data) => {
        if (data) {
            if (value !== data[field]) {
                return 'Fields do not match';
            }
        }
    };
}

export function createValidator(rules) {
    return (data = {}) => {
        const errors = {};
        Object.keys(rules).forEach((key) => {
            const rule = join([].concat(rules[key])); // concat enables both functions and arrays of functions
            const error = rule(data[key], data);
            if (error) {
                errors[key] = error;
            }
        });
        return errors;
    };
}
