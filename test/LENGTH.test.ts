import { VALIDATOR } from "../src/utils";

describe("LENGTHVALIDATION", () => {
    let testNum1 = 1;
    let testString1 = "102"
    let testNum2 = 102;
    let testString2 = "1";
    const validator = new VALIDATOR();
    it("should return true if the value is of length 1", () => {
        expect(validator.length(testNum1, 1, "equal")).toBe(true);
    });
    it("should return false if the value is not of length 1", () => {
        expect(validator.length(testString1, 1, "equal")).toBe(false);
    });
    it("should return true if the value is of length 3", () => {
        expect(validator.length(testNum2, 3, "equal")).toBe(true);
    });
    it("should return false if the value is not of length 3", () => {
        expect(validator.length(testString2, 3, "equal")).toBe(false);
    });
});