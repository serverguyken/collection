
/**
 * Checks if the value is a number
 * @param value - the value to check
 */
const ISNUM = (value: any, checkInt: boolean = false) => {
    if (typeof value === "number") {
        if (checkInt) {
            return Number.isInteger(value)
        } else {
            return true
        }
    } else {
        return false
    }
}


/**
 * Check if the value is float
 */
const ISFLOAT = (value: any) => {
    return ISNUM(value) && !Number.isInteger(value)  
}

/**
 * Checks if the value is a string
 * @param value - the value to check
 */
const ISSTRING = (value: any) => {
    return typeof value === "string"
}

/**
 * Checks if the value is a boolean
 * @param value - the value to check
 */
const ISBOOL = (value: any) => {
    return typeof value === "boolean"
}

/**
 * Checks if the value is an object
 * @param value - the value to check
*/
const ISOBJ = (value: any) => {
    return typeof value === "object" && !ISARRAY(value) && !ISFUNC(value) && value !== null
}


/**
 * Checks if the value is a function
 * @param value - the value to check
 */
const ISFUNC = (value: any) => {
    return typeof value === "function"
}

/**
 * Checks if the value is an array
 * @param value - the value to check
    */
const ISARRAY = (value: any) => {
    return Array.isArray(value)
}

/**
 * Checks if the value is positive\
 * @param value - the value to check
    */
const ISPOSITIVE = (value: any) => {
    return ISNUM(value) && value > 0
}

/**
 * Checks if the value is negative
 * @param value - the value to check
 * @returns true if the value is negative
 * @example
 * ISNEGATIVE(-1) // true
 * ISNEGATIVE(1) // false
    */
const ISNEGATIVE = (value: any) => {
    return ISNUM(value) && value < 0
}

export { ISNUM, ISFLOAT, ISSTRING, ISBOOL, ISOBJ, ISFUNC, ISARRAY, ISPOSITIVE, ISNEGATIVE };