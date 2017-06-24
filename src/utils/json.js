
/**
 * Check if a valid JSON string so it can be parsed
 * @param {*} str
 * @return {boolean}
 */
export function isJsonString(str) {
    if (str === null) {
        return false;
    }

    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
