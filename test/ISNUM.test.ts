import { ISNUM } from "../src/utils/";

describe("ISNUM", () => {
    let testNum = 1;
    let testString = "1";
    let testBool = true;
    
    it("should return true if the value is a number", () => {
        expect(ISNUM(testNum)).toBe(true);
    });
    it("should return false if the value is not a number", () => {
        expect(ISNUM(testString)).toBe(false);
    });
    it("should return false if the value is not a number", () => {
        expect(ISNUM(testBool)).toBe(false);
    });
});