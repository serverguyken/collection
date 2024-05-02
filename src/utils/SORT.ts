
/**
 *  Sorts an array of objects by a key
 * @param arr 
 * @param key 
 * @param order 
 * @returns 
 */
const SORT = <T extends any, Key extends keyof T>(arr: T[], key: Key, order: 'asc' | 'desc' = 'asc') => {
    return arr.sort((a, b) => {
        if (order === 'asc') {
            return a[key] > b[key] ? 1 : -1;
        } else {
            return a[key] < b[key] ? 1 : -1;
        }
    });
}

export default SORT;