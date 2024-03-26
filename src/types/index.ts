import { TResponseStatus } from "./api";




/**
 * Exclude a property from an object
 */
export type TOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


/**
 * Create a union type from object keys
 * @example
 * const obj = { create: true, delete: false, update: true }
 * const union: TUnion<typeof obj> = "create" | "delete" | "update"
 */
export type TUnion<T extends object> = keyof T;


/**
 * Create a return value type from an object
 * @example
 * const obj = { name: "John", age: 20 }
 * const returnValue: TReturnValue<"name", typeof obj> = "John"
 */
export type TReturnValue<TKEY, TOBJ> = TKEY extends keyof TOBJ ? TOBJ[TKEY] : TKEY extends string ? TKEY : never

/**
 * Users GeoLocation type
*/
export type TGeoLocation = {
    coordinates: {
        latitude: number;
        longitude: number;
    }
    city: string;
    region: string;
    postalCode: string;
    country: string;
}

export type TGeoLocationIP = {
    id: `IP_${string}`
    user_id: string;
    ip: string;
    postalCode: number;
    city: string;
    region: string;
    country: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
}

/**
 * Creates a union type from a string
 */
export type TTypeUnionHelper<T extends string> = T | Omit<string, T>;
/**
 * Extracts the props from an object
 */
export type TExtractProps<Obj, Props extends keyof Obj> = {
    [P in Props]: Obj[P];
};


export { TResponseStatus }


export type TOmitKeys<T, K extends [...(keyof T)[]]> = Pick<T, Exclude<keyof T, K[number]>>;