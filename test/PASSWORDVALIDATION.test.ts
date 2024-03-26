import { VALIDATOR } from "../src/utils";

describe("PASSWORDVALIDATION.test", () => {
    let validPassword = "password@123";
    let invalidPassword = "pass";
    let validPasswordLength = "thisisalong@password";
    let invalidPasswordLength = "thisisalong@password123";
    let strictValidPassword = "Password@123";
    let strictInvalidPassword = "password@123";
    let strictValidPasswordLength = "Thisisalong@password123";
    let strictInvalidPasswordLength = "thisisalong@password123";
    const validator = new VALIDATOR();
    // test a correct value
    it("should return true if the password is valid", () => {
        expect(validator.password(validPassword, 8, 20)).toBe(true);
    })
    it ("should return false if the password is invalid", () => {
        expect(validator.password(invalidPassword, 8, 20)).toBe(false);
    })
    it ("should return true if the password is valid", () => {
        expect(validator.password(validPasswordLength, 8, 20)).toBe(true);
    })
    it ("should return false if the password is invalid", () => {
        expect(validator.password(invalidPasswordLength, 8, 20)).toBe(false);
    })
    it ("should return true if the password is valid", () => {
        expect(validator.password(strictValidPassword, 8, 20, true)).toBe(true);
    })
    it ("should return false if the password is invalid", () => {
        expect(validator.password(strictInvalidPassword, 8, 20, true)).toBe(false);
    })
    it ("should return true if the password is valid", () => {
        expect(validator.password(strictValidPasswordLength, 8, 23, true)).toBe(true);
    })
    it ("should return false if the password is invalid", () => {
        expect(validator.password(strictInvalidPasswordLength, 8, 20, true)).toBe(false);
    })
});