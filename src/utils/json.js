
/**
 * Check if a valid JSON string so it can be parsed
 * @param {*} str
 * @return {boolean}
 */
export function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
