import { VALIDATOR } from "../src/utils/";

describe("NameValid", () => {
    let validName = "John Doe";
    let invalidName = "John Doe 123";
    let invalidName2 = "Johnx";
    let invalidName3 = "John_Doe Bon";
    let invalidName4 = "";
    const validator = new VALIDATOR();
    // test a correct value
    it("should return true if the name is valid", () => {
        expect(validator.name(validName)).toBe(true);
    })
    it ("should return false if the name is invalid", () => {
        expect(validator.name(invalidName)).toBe(false);
    })
    it ("should return false if the name is invalid", () => {
        expect(validator.name(invalidName2)).toBe(false);
    })
    it ("should return false if the name is invalid", () => {
        expect(validator.name(invalidName3)).toBe(false);
    })
    it ("should return false if the name is invalid", () => {
        expect(validator.name(invalidName4)).toBe(false);
    })
});