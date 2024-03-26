import { ISEMPTY } from "../src/utils/";

describe("ISEMPTY", () => {
    let testString = "";
    let testArray: any[] = [];
    let testObject = {};
    let testNull: null = null;
    let testUndefined: undefined = undefined;
    // test a correct value
    it("should return true if the value is a number", () => {
        expect(ISEMPTY([1])).toBe(false);
    })

    // test an empty string
    it("should return true if the value is an empty string", () => {
        expect(ISEMPTY(testString)).toBe(true);
    });
    
    // test an empty array
    it("should return true if the value is an empty array", () => {
        expect(ISEMPTY(testArray)).toBe(true);
    });

    // test an empty object
    it("should return true if the value is an empty object", () => {
        expect(ISEMPTY(testObject)).toBe(true);
    });

    // test null
    it("should return true if the value is null", () => {
        expect(ISEMPTY(testNull)).toBe(true);
    });

    // test undefined
    it("should return true if the value is undefined", () => {
        expect(ISEMPTY(testUndefined)).toBe(true);
    });
});