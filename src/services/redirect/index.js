import { browserHistory } from 'react-router';

export const redirect = (path = '/') => {
    return browserHistory.push(path);
};