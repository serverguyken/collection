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