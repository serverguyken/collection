
/**
 * Uncapitalizes the first letter of a string
 * @param str The string to uncapitalize
 * @returns The uncapitalized string
 */
const UNCAPITALIZE = (str: string) => {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

export default UNCAPITALIZE;