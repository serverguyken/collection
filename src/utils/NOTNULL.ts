
/**
 * Checks if the value is not null
 * @param value - the value to check
 * @returns true if the value is not null
 */
const NOTNULL = (value: any) => {
    return value !== null
}

/**
 * Strict check if the value is not null - checks if the value is not null or "null"
 * @param value 
 * @returns 
 */
const STRICTNOTNULL = (value: any) => {
    return NOTNULL(value) || value !== "null"
}

export { STRICTNOTNULL };
export default NOTNULL;