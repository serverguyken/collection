


type TReturnType<T> = T extends 'number' ? number : T extends 'string' ? string : T extends 'boolean' ? boolean : T extends 'array' ? Array<any> : T extends 'object' ? object : T extends 'date' ? Date : T;
/**
 * Convert a value to specified type. If the conversion fails, the value is returned as is.
 * @param value
 * @param type
 * @example
 * TOTYPE('1', 'number') // 1
 */


export default function TOTYPE<TValue = any, TType extends 'number' | 'string' | 'boolean' | 'array' | 'object' | 'date' = "string">(value: TValue, type: TType): TReturnType<TType> {
    try {
        switch (type) {
            case 'number':
                return Number(value) as TReturnType<TType>
            case 'string':
                return String(value) as TReturnType<TType>
            case 'boolean':
                return Boolean(value) as TReturnType<TType>
            case 'array':
                return Array(value) as TReturnType<TType>
            case 'object':
                return Object(value) as TReturnType<TType>
            case 'date':
                return new Date(value as any) as TReturnType<TType>
            default:
                return String(value) as TReturnType<TType>
        }
    } catch (error) {
        return value as TReturnType<TType>
    }
}