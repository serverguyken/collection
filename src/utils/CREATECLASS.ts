
/**
 * Creates a string of classes from an array of strings
 * @param stringArr 
 */
const CREATECLASS = (...stringArr: string[]) => {
    return stringArr.join(' ');
}

/**
 * Adds SHOPYUI_ prefix to a component name
 * @param component - The component name
 * @returns 
 */
export const CREATECLASSNAME = (component: string): string => {
    const className = `SHOPYUI_${component}`;
    return className;
}

export default CREATECLASS;