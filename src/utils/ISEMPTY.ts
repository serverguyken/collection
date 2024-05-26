

import { ISARRAY, ISNUM, ISOBJ } from "./ISDATATYPE";

/**
 * Checks if the value is null or undefined or empty
 * @param value  - the value to check
 */
const ISEMPTY = (value: any) => {
    if (ISARRAY(value)) {
        return value.length === 0;
    } else if (ISOBJ(value)) {
        return Object.keys(value).length === 0;
    } else {
        return value === null || value === undefined || value?.trim() === '' || value === 0 || value === false;
    }
}


/**
 *  Checks if the value is empty
 * @param value  - the value to check
 */
const ISSTRINGEMPTY = (value: string) => {
    return value.trim() === '';
}

/**
 * Strict check if the value is empty or null or undefined
 * @param value 
 * @returns 
 */
const STRICTEMPTY = (value: any) => {
    return ISEMPTY(value) || value?.trim() === "null" || value?.trim() === "undefined"
}

/**
 * Checks if all the values in the array of the type specified
 * @param value  - the array to check
 * @param type  - the type of the array
 */
const ISARRAYOF = (value: any[], type: string) => {
    if (!ISARRAY(value)) return false; // return true if the value is not an array that means it is empty
    if (value.every((val) => typeof val === type)) return true;
    return false;
}

/** 
 * Checks if the array is empty
 * @param arr - the array to check
 * Note: If the array is not an array then it returns true
*/
const ISEMPTYARRAY = (arr: any[]) => {
    if (!ISARRAY(arr)) return true;
    if (arr.length === 0) return true;
    return false;
}

/**
 * Checks if the object is empty
 * @param obj  - the object to check
 */
const ISEMPTYOBJ = (obj: any) => {
    if (!ISOBJ(obj)) return false;
    if (Object.keys(obj).length === 0) return true;
    return false;
}




export { ISEMPTY, STRICTEMPTY, ISSTRINGEMPTY, ISEMPTYARRAY, ISARRAYOF, ISEMPTYOBJ };