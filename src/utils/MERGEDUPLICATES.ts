


/**
 * The function `MERGEDUPLICATES` takes an array of objects, a property to check for duplicates, and a
 * property to merge, and returns a new array with duplicates merged based on the specified properties.
 * @param {T} arr - The `arr` parameter is an array of elements of type `T`.
 * @param prop - The `prop` parameter is the key of the property in the array elements that you want to
 * use for merging duplicates.
 * @param prop2 - `prop2` is the key of the property in the array elements that you want to merge
 * duplicates for.
 * @param props - `props` is an array of keys of the properties in the array elements that you want to merge
 * @returns an array of type T.
 */
export default function MERGEDUPLICATES <T extends any[]>(arr: T, prop: keyof T[number], prop2: keyof T[number], ...props: (keyof T[number])[]): T {
    return arr.reduce((acc, current) => {
        const x = acc.find((item: any) => item[prop] === current[prop]);
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc.map((item: any) => {
                if (item[prop] === current[prop]) {
                    return {
                        ...item,
                        [prop2]: [...item[prop2], ...current[prop2]],
                        ...props.reduce((acc, prop) => {
                            return {
                                ...acc,
                                [prop]: [...item[prop], ...current[prop]]
                            }
                        }, {})
                    };
                } else {
                    return item;
                }
            });
        }
    }, []);
}