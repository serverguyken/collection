/**
 * Returns true if the input value is truthy or 0.
 * @param {Value} value-  any type.
 * 
 * If the value is strictly equal to 0, it will return `true`. Otherwise, it will return `true` if the value is truthy,
 */
export default function IF<Value extends any>(value: Value): boolean {
    if (value === 0) return true;
    return value ? true : false
}


/**
 * Returns a boolean value based on the strict equality comparison of
 * the input `value`. If `value` is strictly equal to 0, it returns `false`. If `value` is strictly
 * equal to 1, it returns `true`. Otherwise, it returns `true` if `value` is truthy, and `false` if
 * `value` is falsy.
 * @param {Value} value - any type.
 */
export function IFSTRICT<Value extends any>(value: Value): boolean {
    if (value === 0) return false;
    if (value === 1) return true;
    return value ? true : false
}