
/**
 * Returns the plural or singular form of a noun based on the count
 * @param count - the count 
 * @param singular - the singular form of the noun
 * @param plural - the plural form of the noun
 * @example
 * COUNTTONOUN(1, 'apple', 'apples') // returns 'apple'
 * COUNTTONOUN(2, 'apple', 'apples') // returns 'apples'
 */
const COUNTTONOUN = (count: number, singular: string, plural: string) => {
    return count > 1 ? plural : singular;
}
export default COUNTTONOUN;
