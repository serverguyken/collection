
/**
 * Uncapitalizes the first letter of a string
 * @param str The string to uncapitalize
 * @returns The uncapitalized string
 * @deprecated since version 0.4.3 - use LOWERCASE instead
 */
export const UNCAPITALIZE = <T extends string>(str: T): Lowercase<T> => {
    return str.charAt(0).toLowerCase() + str.slice(1) as Lowercase<T>;
};

const LOWERCASE = <T extends string>(str: T): Lowercase<T> => {
    return str.charAt(0).toLowerCase() + str.slice(1) as Lowercase<T>;
};

export default LOWERCASE;