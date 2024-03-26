

import { TExtractProps } from "../types";


/**
 *  Selects the props from an object
 * @param obj  - the object to select props from
 * @param props  - the props to select
 * @returns the selected props
 */ 
export default function SELECTPROPS<Obj, Props extends keyof Obj>(obj: Obj, props: Props[]): TExtractProps<Obj, Props> {
    const newObj = {} as TExtractProps<Obj, Props>;
    props.forEach(prop => {
        newObj[prop] = obj[prop];
    });
    return newObj;
}


/**
 * The `REMOVEPROPS` function removes specified properties from an object and returns a new object
 * without those properties.
 * @param {Obj} obj - The `obj` parameter is the object from which you want to remove properties.
 * @param {Props[]} props - props is an array of property names that need to be removed from the
 * object.
 * @returns a new object that is the same as the input object, but with the specified properties
 * removed.
 */
export const REMOVEPROPS = <Obj, Props extends keyof Obj>(obj: Obj, props: Props[]): Omit<Obj, Props> => {
    const newObj = {...obj};
    props.forEach(prop => {
        delete newObj[prop];
    });
    return newObj;
}