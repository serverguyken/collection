import { ISDEFINED, NOTNULL } from ".";

/*
 * Created on Fri Apr 14 2023
 *
 * Copyright (c) 2023 Shopascart
 */
/**
 * Converts the value to a string
 * @param value - the value to convert
 * @returns the value as a string
 * @example
 * TOSTRING(1) // '1'
 * TOSTRING({}) // '[object Object]'
 * TOSTRING(null) // ''
*/
const TOSTRING = (value: any): string => {
    if (!ISDEFINED(value)) return '';
    if (!NOTNULL(value)) return '';
    return value.toString();
}

export default TOSTRING;