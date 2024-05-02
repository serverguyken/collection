
/**
 *  Sorts an array of objects by a key
 * @param arr 
 * @param key 
 * @param order 
 * @returns 
 */
type KeysMatching<T, V> = {
    [K in keyof T]-?: T[K] extends V ? K : never
  }[keyof T]
const SORT = <T extends any, Key extends keyof T>(arr: T[], key: Key, order: 'asc' | 'desc' = 'asc') => {
    return arr.sort((a, b) => {
        if (order === 'asc') {
            return a[key] > b[key] ? 1 : -1;
        } else {
            return a[key] < b[key] ? 1 : -1;
        }
    });
}
const arr = [
    {
        t: 1,
        name: ":ee"
    },
    {
        t: 1,
        name: ":ee",
        st: ""
    }
]

export default SORT;