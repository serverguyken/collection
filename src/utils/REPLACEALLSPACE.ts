

/**
 * The function `REPLACEALLSPACE` replaces all spaces in a given string with a specified replacement
 * value.
 * @param {ClassName} cl - `cl` is a parameter representing a class name, which is expected to be a
 * string.
 * @param {ReplaceValue} replaceValue - The `replaceValue` parameter is the value that will replace all
 * occurrences of spaces in the input string `cl`.
 * @returns string
 */

const REPLACEALLSPACE = <ClassName extends string, ReplaceValue extends string>(cl: ClassName, replaceValue: ReplaceValue): string => {
    return cl.replaceAll(" ", replaceValue) as ClassName
};

/**
 * The function `REPLACESPACE` replaces spaces in a string with a specified replacement value.
 * @param {ClassName} cl - The `cl` parameter represents a class name or string that you want to modify
 * by replacing spaces with another value.
 * @param {ReplaceValue} replaceValue - The `replaceValue` parameter is the value that will replace any
 * spaces in the `cl` parameter.
 * @returns string
 */
export const REPLACESPACE = <ClassName extends string, ReplaceValue extends string>(cl: ClassName, replaceValue: ReplaceValue): string => {
    return cl.replace(" ", replaceValue) as ClassName
};

export default REPLACEALLSPACE