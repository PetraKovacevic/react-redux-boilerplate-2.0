import _ from 'lodash';

export function generatePassword() {
    return Math.random().toString(36).slice(-8);
}

export function params(params) {
    let urlParams = _.map(params, (value, key) => {
        return `${key}=${encodeURIComponent(value)}`;
    }).join('&');

    return urlParams;
}
