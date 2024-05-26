import { VALIDATOR } from "../src/utils";

describe("isValidInput", () => {
    let plainText = "Hello's World!?"
    let testNum1 = '800-200-200';
    let testString1 = "Hello, World's!?::-[]";
    let testScript = "<script>alert('XSS');</script>"
    const validator = new VALIDATOR();
    it("should return true if the plain text is valid", () => {
        expect(validator.plainText(plainText)).toBe(true);
    });
    it("should return true if the input is valid", () => {
        expect(validator.input(testNum1)).toBe(true);
    });
    it("should return true if the input is valid", () => {
        expect(validator.input(testString1)).toBe(true);
    });
    it("should return false if the input is not valid", () => {
        expect(validator.input(testScript)).toBe(false);
    });
});