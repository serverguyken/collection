

/**
 * The function `REPEAT` takes an array and a number as input and returns a new array with each element
 * repeated a specified number of times.
 * @param {ARR} arr - The `arr` parameter is an array of any type.
 * @param {number} times - The "times" parameter is the number of times each element in the array
 * should be repeated.
 * @returns an array with each element repeated a specified number of times.
 * @example
 * REPEAT([1, 2, 3], 2) // returns [1, 1, 2, 2, 3, 3]
 */
export default function REPEAT<ARR extends any[]>(arr: ARR, times: number): ARR {
    return arr.reduce((acc, val) => acc.concat(Array(times).fill(val)), [] as unknown as ARR);
}