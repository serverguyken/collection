

/**
 * Create a new object that omits specified keys from an existing object.
 * @param {T} obj - The `obj` parameter is the object from which you want to omit certain keys.
 * @param {K[]} keys - The `keys` parameter is a rest parameter that allows you to pass in multiple
 * keys of type `K` (which is a subtype of `keyof T`) as arguments. These keys represent the properties
 * of the `obj` object that you want to omit.
 * @returns a new object that is a clone of the input object `obj`, but with the specified keys `keys`
 * omitted.
 */
export default function OMIT<T extends object, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> {
    const clone = { ...obj }
    keys.forEach(key => delete clone[key])
    return clone
}