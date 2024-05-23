
/**
 * Check if value has length
 * @param value - the value to check
 * @returns true if the value has length
 */
const HASLENGTH = (value: any): {
    isTrue: boolean;
    length: number;
} => {
    if (value) {
        const v = 'w'
        const hasLengthProperty = value?.length === 'number'
        if (hasLengthProperty) {
            return {
                isTrue: true,
                length: value.length
            }
        } else {
            return {
                isTrue: false,
                length: 0
            }
        }
    } else {
        return {
            isTrue: false,
            length: 0
        }
    }
}

export default HASLENGTH;