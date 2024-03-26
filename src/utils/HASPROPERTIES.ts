

import HASPROPERTY from './HASPROPERTY';

/**
 * Checks if the object has the properties
 * @param obj  - the object to check
 * @param props  - the properties to check
 * @example
 * const obj = { name: 'John', age: 20 };
 * const hasProperties = HASPROPERTIES(obj, ['name', 'age']); // true
 * 
 */
export const HASPROPERTIES = <T extends any>(obj: T, props: T extends object ? (keyof T)[] : string[]): boolean => {
    if (obj === null || obj === undefined) return false;
    if (typeof obj !== 'object') return false;
    try {
        for (let i = 0; i < props.length; i++) {
            const prop = props[i];
            if (!HASPROPERTY(obj, prop as any)) return false;
        }
        return true;
    } catch (error) {
        return false;
    }
};


export default HASPROPERTIES;