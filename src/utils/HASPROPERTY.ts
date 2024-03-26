
/**
 * Checks if the object has the property
 * @param obj  - the object to check
 * @param prop  - the property to check
 */
const HASPROPERTY = <T extends any>(obj: T, prop: T extends object ? (keyof T) : string): boolean => {
    if (obj === null || obj === undefined) return false;
    if (typeof obj !== 'object') return false;
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

export default HASPROPERTY;