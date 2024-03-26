
/**
 * Checks if the value is defined
 * @param value - the value to check
 * @returns true if the value is defined
 */
const ISDEFINED = (value: any) => {
    return value !== undefined
}

/**
 * Strict check if the value is defined - checks if the value is not undefined or "undefined"
 * @param value  - the value to check
 * @returns 
 */
const STRICTDEFINED = (value: any) => {
    return ISDEFINED(value) || value !== "undefined"
}

export { STRICTDEFINED };
export default ISDEFINED;