
/**
 * Capitalize the first letter of a string
 * @param str  The string to capitalize
 */
const CAPITALIZE = <T extends string>(str: T): Capitalize<T> => {
    return str.charAt(0).toUpperCase() + str.slice(1) as Capitalize<T>;
}
/**
 *  Capitalize each word in a string
 * @param str The string to capitalize 
 */
export function CAPITALIZEEACHWORD <T extends string>(str: T): Uppercase<T> {
    return str.replace(/\b\w/g, l => l.toUpperCase()) as Uppercase<T>;
}

export default CAPITALIZE;
