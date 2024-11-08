/**
 * Transforms a specified word in a sentence by adding "ing" at the end.
 * If the `removeLastChar` flag is set to `true`, the function will remove the last character
 * of the specified word before appending "ing".
 *
 * @param {string} text - The sentence containing the word to transform.
 * @param {number} position - The zero-based index of the word in the sentence to modify.
 * @param {boolean} removeLastChar - If `true`, removes the last character of the specified word before appending "ing".
 * @returns {string} - The modified sentence with the specified word transformed.
 *
 * @example
 * // Adds "ing" to the first word, "Generate", and removes the last character "e".
 * const result = TRANSFORMTOING("Generate questions", 0, true);
 * console.log(result); // Output: "Generating questions"
 */
export default function TRANSFORMTOING(
    text: string,
    position: number,
    removeLastChar: boolean
): string {
    const words = text.split(' ');

    if (position < 0 || position >= words.length) {
        return text
        //throw new Error('Invalid position');
    }

    let word = words[position];

    // Remove last character if required
    if (removeLastChar) {
        word = word.slice(0, -1);
    }

    // Add 'ing' to the selected word
    word += 'ing';

    // Update the word in the original array
    words[position] = word;

    return words.join(' ');
}
