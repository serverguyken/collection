import { TRANSFORMTOING } from "../src/utils";

describe('isValidWord ending in "ing"', () => {
    const result_generate = TRANSFORMTOING("Generate questions", 0, true);
    const result_end = TRANSFORMTOING("It is end", 2, false);
    const result_wrong = TRANSFORMTOING("Wrong word", 2, false);
    it("should return true if the text is valid", () => {
        expect(result_generate).toBe(result_generate);
    });
    it("should return true if the text is valid", () => {
        expect(result_end).toBe(result_end)
    });
    it("should return original text if the position is invalid", () => {
        expect(result_wrong).toBe(result_wrong)
    });
});