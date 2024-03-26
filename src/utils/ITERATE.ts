
/**
 * Iterates through an array and calls a callback function
 * @param arr - the array to iterate through
 * @param cb - the callback function
 * @example
 * ITERATE([1, 2, 3], (item, index) => {
 *    console.log(item, index);
 * });
 */

export function ITERATE<T>(arr: T[], cb: (item: T, index: number) => void) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        cb(arr[i], i);
    }
}
/**
 * Iterates through an array and returns an array of results
 * @param array - the array to iterate through
 * @param callback - the callback function
 * @example
 * const results = ITERATEWITHRESULTS([1, 2, 3], (item, index) => {
 *   return item * 2;
 * });
 */
export function ITERATEWITHRESULTS<T, R>(array: T[], callback: (item: T, index: number) => R): R[] {
    const results: R[] = [];
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        const result = callback(item, index);
        results.push(result);
    }
    return results;
}