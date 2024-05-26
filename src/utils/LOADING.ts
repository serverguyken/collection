import GENERATERANDOMTIMEOUTNUMBER from "./GENERATERANDOMTIMEOUTNUMBER";

/**
 * The HandleLoading function takes a callback function and an optional timeout range, then executes
 * the callback after a random timeout within the specified range.
 * @param {Function} cb - The `cb` parameter is a callback function that will be executed after a
 * certain timeout.
 * @param [timeout] - The `timeout` parameter is an optional parameter that specifies a range of time
 * in milliseconds within which the callback function should be executed. It is an array of two numbers
 * representing the minimum and maximum time values for the timeout range. If the `timeout` parameter
 * is not provided, the default range is set to [300, 500]
 */
const HANDLELOADING = (cb: Function, timeout?: [number, number]) => {
    const t = timeout ? timeout : [300, 500] as [number, number]
    setTimeout(() => {
        cb()
    }, GENERATERANDOMTIMEOUTNUMBER(t[0], t[1]));
}

export default HANDLELOADING;