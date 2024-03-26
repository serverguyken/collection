
/**
 * Capitalize the first letter of a string
 * @param str  The string to capitalize
 */
const CAPITALIZE = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 *  Capitalize each word in a string
 * @param str The string to capitalize 
 */
export function CAPITALIZEEACHWORD(str: string): string {
    return str.replace(/\b\w/g, l => l.toUpperCase());
}

export default CAPITALIZE;
