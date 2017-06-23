import _ from 'lodash';
import { isJsonString } from '@/utils/json';
import { clearErrors, retrieveError, storageError } from './actions';

/**
 * Retrieve data from local storage
 *
 * @param {string} key
 * @param {function} dispatch
 * @return {object|string}
 */
export function get(key, dispatch = () => { }) {
    dispatch(clearErrors());
    let item = localStorage.getItem(key);
    if (isJsonString(item)) {
        return JSON.parse(item);
    }
    return item;
}

/**
 * Put data into local storage
 *
 * @param {string} key
 * @param {*} value
 * @param {function} dispatch
 * @return {void}
 */
export function set(key, value, dispatch = () => { }) {
    dispatch(clearErrors());
    let itemValue = value;
    if (_.isObjectLike(itemValue)) {
        itemValue = JSON.stringify(itemValue);
    }
    try {
        localStorage.setItem(key, itemValue);
    } catch (error) {
        dispatch(storageError(error));
    }
}

/**
 * Remove key/value from local storage
 * 
 * @param key
 */
export function remove(key) {
    localStorage.removeItem(key);
}
