


/**
 * The function removes duplicate elements from an array.
 * @param {ARR} arr - The parameter `arr` is an array of any type.
 * @returns an array with all duplicate elements removed.
 */
export default function REMOVEDUPLICATES<ARR extends any[]>(arr: ARR): ARR {
    return [...new Set(arr)] as ARR;
}

/**
 * The function `DEEPREMOVEDUPLICATES` takes an array as input and returns a new array with all the duplicate values removed.
 * @param {ARR} arr - The `arr` parameter is an array of any type.
 * @returns a new array with all the duplicate values removed.
 */
export function DEEPREMOVEDUPLICATES<ARR extends any[]>(arr: ARR): ARR {
    return JSON.parse(JSON.stringify([...new Set(arr)])) as ARR;
}