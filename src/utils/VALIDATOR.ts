import HASLENGTH from "./HASLENGTH";
import TOSTRING from "./TOSTRING";

/**
 * Validate an email address
 * @param value - the value to validate
 */
export const EMAILVALIDATION = (value: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(value)) {
        return false;
    } else {
        return true;
    }
}


export const EMAILVALIDATIONWITHMESSAGE = (value: string) => {
    const valid = EMAILVALIDATION(value);
    if (!valid) {
        return {
            valid: false,
            message: "Invalid email address",
            title: "Invalid email address: ",
            reasons: ["Email must be of the format: email@email.com"]
        }
    } else {
        return {
            valid: true,
            message: "Email address is valid",
            title: "",
            reasons: [""]
        }
    }
}

/**
 *  Phone number validation
 * @param value  - the value to validate
 * @param max  - the maximum length of the phone number
 * @param countryCode  - the country code of the phone number
 */
export const PHONENUMBERVALIDATION = (value: string, max: number, countryCode?: string) => {
    if (!countryCode) {
        const phoneRegex = new RegExp(`^[0-9]{${max}}$`);
        if (!phoneRegex.test(value)) {
            return false;
        } else {
            return true;
        }
    } else {
        const phoneRegex = new RegExp(`^\\${countryCode}[0-9]{${max - countryCode.length}}$`);
        if (!phoneRegex.test(value)) {
            return false;
        } else {
            return true;
        }
    }
}

/**
 * Number validation
 * @param value  - the value to validate
 * @param max  - the maximum length of the number
 */
export const NUMBERVALIDATION = (value: string, max: number) => {
    const numberRegex = new RegExp(`^[0-9]{${max}}$`);
    if (!numberRegex.test(value)) {
        return false;
    } else {
        return true;
    }
}

/**
 *  Password validation
 * 
 * **Note**: Strict password validation requires the password to have at least
 * - one uppercase letter
 * - one lowercase letter
 * - one number
 * - one special character
 * 
 * @param value  - the value to validate
 * @param min  - the minimum length of the password
 * @param max  - the maximum length of the password
 * @param strict  - whether to use strict password validation or not
 * 
 * @example password("password@123", 8, 20) // returns true
 * @example password("password@123", 8, 20, true) // returns false because the password does not have at least one uppercase letter
 */
export const PASSWORDVALIDATION = (value: string, min: number, max: number, strict: boolean = false) => {
    if (strict) {
        return STRICTPASSWORDVALIDATION(value, min, max);
    } else {
        const passwordRegex = new RegExp(`^[a-zA-Z0-9!@#$%^&*]{${min},${max}}$`);
        if (!passwordRegex.test(value)) {
            return false;
        }
        return true;
    }
};

export const PASSWORDVALIDATIONWITHMESSAGE = (value: string, min: number, max: number, strict: boolean = false) => {
    const valid = PASSWORDVALIDATION(value, min, max, strict);
    if (strict) {
        if (!valid) {
            return {
                valid: false,
                message: "Invalid password",
                title: "Password must have at least: ",
                reasons: ["one uppercase letter", "one lowercase letter", "one number", "one special character"]
            }
        } else {
            return {
                valid: true,
                message: "Password is valid",
                title: "",
                reasons: [""]
            }
        }
    } else {
        if (!valid) {
            return {
                valid: false,
                message: "Invalid password",
                title: "Password must be of length: ",
                reasons: [`between ${min} and ${max}`]
            }
        } else {
            return {
                valid: true,
                message: "Password is valid",
                title: "",
                reasons: [""]
            }
        }
    }
}

/**
 * Strict password validation
 * 
 *  * **Note**: Strict password validation requires the password to have at least
 * - one uppercase letter
 * - one lowercase letter
 * - one number
 * - one special character
 * @param value  - the value to validate
 * @param min  - the minimum length of the password
 * @param max  - the maximum length of the password
 * @example password("Password@123", 8, 20) // returns true
 * @example password("password@123", 8, 20) // returns false because the password does not have at least one uppercase letter
 */
export const STRICTPASSWORDVALIDATION = (value: string, min: number, max: number) => {
    const passwordRegex = new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{${min},${max}}$`);
    if (!passwordRegex.test(value)) {
        return false;
    }
    return true;
};


/**
 * Name validation
 * @param value  - the value to validate
 */
export const NAMEVALIDATION = (value: string) => {
    const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!nameRegex.test(value)) {
        return false;
    } else {
        return true;
    }
}

/**
 * URL validation
 * @param value - the value to validate
 */
export const URLVALIDATION = (value: string) => {
    const urlRegex = /^(http|https):\/\/[a-zA-Z0-9-_.]+\.[a-zA-Z]{2,5}$/;
    if (!urlRegex.test(value)) {
        return false;
    } else {
        return true;
    }
}


/**
 * Number length validation
 */
export const LENGTHVALIDATION = (value: any, max: number, type?: "greater-than" | "less-than" | "equal") => {
    if (type) {
        if (type === "greater-than") {
            return HASLENGTH(value).isTrue ? HASLENGTH(value).length > max : TOSTRING(value).length > max;
        } else if (type === "less-than") {
            return HASLENGTH(value).isTrue ? HASLENGTH(value).length < max : TOSTRING(value).length < max;
        } else if (type === "equal") {
            return HASLENGTH(value).isTrue ? HASLENGTH(value).length === max : TOSTRING(value).length === max;
        } else {
            return false;
        }
    } else {
        if (HASLENGTH(value).isTrue) {
            if (HASLENGTH(value).length !== max) {
                return false;
            }
            return true;
        } else {
            if (TOSTRING(value).length !== max) {
                return false;
            } else {
                return true;
            }
        }

    }

};


/**
 * Mask email
 */
export const MASKEMAIL = (value: string) => {
    const [name, domain] = value.split('@');
    const { length: len } = name;
    const maskedName = name[0] + '....' + name[len - 1];
    const maskedEmail = maskedName + '@' + domain;
    return maskedEmail;
};


export interface IVALIDATOR {
    customValidations: any;
    name(name: string): boolean;
    email(email: string): boolean;
    emailWithMessage(email: string): {
        valid: boolean;
        message: string;
        title: string;
        reasons: string[];
    };
    phoneNumber(phoneNumber: string, max: number, countryCode?: string): boolean;
    length(number: any, max: number, type?: "greater-than" | "less-than" | "equal"): boolean;
    password(password: string, min: number, max: number, strict: boolean): boolean;
    passwordWithMessage(password: string, min: number, max: number, strict: boolean): {
        valid: boolean;
        message: string;
        title: string;
        reasons: string[];
    };
    url(url: string): boolean;
    addCustomValidation(name: string, validation: (value: string) => boolean): void;
    maskEmail(value: string): string;
}
/**
 * Validates emails, phone numbers, passwords, names, urls, etc
 */
class VALIDATOR implements IVALIDATOR {
    customValidations: any = {};
    constructor() {
        this.customValidations = {};
    }

    /**
     * Validates a name
     * @param name - the name to validate
     * @returns 
     */

    name(name: string) {
        return NAMEVALIDATION(name);
    }

    /**
     * Validates an email
     * @param email - the email to validate
     * @returns true if the email is valid, false otherwise
     * @example
     * const validator = new VALIDATOR();
     * validator.email("jogn@user.com"); // returns true
     * validator.email("jogn@user"); // returns false
     */
    email(email: string) {
        return EMAILVALIDATION(email);
    }

    /**
     * Validates an email and returns a message, title and reasons why the email is invalid
     * @param email - the email to validate
     * @returns  an object containing the message, title and reasons why the email is invalid
     * @example
     * const validator = new VALIDATOR();
     * validator.emailWithMessage("john@email.com"); 
     */
    emailWithMessage(email: string) {
        return EMAILVALIDATIONWITHMESSAGE(email);
    }
    /**
     * Validates a phone number
     * @param phoneNumber - the phone number to validate
     * @param max - the maximum length of the phone number
     * @param countryCode - the country code of the phone number
     * @returns true if the phone number is valid, false otherwise
     * @example
     * const validator = new VALIDATOR();
     * validator.phoneNumber("08012345678", 11); // returns true
     * validator.phoneNumber("+2348012345678", 13, "+234"); // returns true
     * validator.phoneNumber("08012345678", 10); // returns false
     */
    phoneNumber(phoneNumber: string, max: number, countryCode?: string) {
        return PHONENUMBERVALIDATION(phoneNumber, max, countryCode);
    }

    /**
     * Validates a password
     * @param password - the password to validate
     * @param min - the minimum length of the password
     * @param max - the maximum length of the password
     * @param strict - whether to use strict password validation or not
     * @returns true if the password is valid, false otherwise
     * @example
     * const validator = new VALIDATOR();
     * validator.password("password", 8, 20); // returns true
     * validator.password("pass", 8, 20); // returns false
     */
    password(password: string, min: number, max: number, strict: boolean = false) {
        return PASSWORDVALIDATION(password, min, max, strict);
    }

    /**
     * Validates a password and returns a message, title and reasons why the password is invalid
     * @param password - the password to validate
     * @param min - the minimum length of the password
     * @param max - the maximum length of the password
     * @param strict - whether to use strict password validation or not
     * @returns an object containing the message, title and reasons why the password is invalid
     * @example
     * const validator = new VALIDATOR();
     * validator.passwordWithMessage("password", 8, 20);
     */
    passwordWithMessage(password: string, min: number, max: number, strict: boolean = false) {
        return PASSWORDVALIDATIONWITHMESSAGE(password, min, max, strict);
    }


    /**
     * Validates a url
     * @param url - the url to validate
     * @returns true if the url is valid, false otherwise
     * @example
     * const validator = new VALIDATOR();
     * validator.url("https://www.google.com"); // returns true
     * validator.url("https://www.google"); // returns false
     */
    url(url: string) {
        return URLVALIDATION(url);
    }

    /**
     * Validates the length of a number or string
     * @param value - the value to validate
     * @param max - the maximum length of the number
     * @param type - check if length is  "greater-than" | "less-than"
     * @returns true if the number is valid, false otherwise
     * @example
     * const validator = new VALIDATOR();
     * validator.length(123456, 6); // returns true
     * validator.length('123456', 5); // returns false
     */
    length(value: any, max: number, type?: "greater-than" | "less-than" | "equal") {
        return LENGTHVALIDATION(value, max, type);
    }

    /**
     * Adds a custom validation
     * @param name - the name of the custom validation
     * @param validation - the validation function
     * @returns true if the custom validation is valid, false otherwise
     * @example
     * const validator = new VALIDATOR();
     * validator.addCustomValidation("customValidation", (value: string) => {
     *     if (value === "custom") {
     *        return true;
     *    } else {
     *       return false;
     *    }
     * });
     */
    addCustomValidation(name: string, validation: (value: string) => boolean) {
        if (typeof validation !== "function") {
            throw new Error("The validation must be a function");
        } else {
            const customValidation = {
                name,
                validation
            }
            this.customValidations[name] = customValidation;
        }
    }
    /**
     * Mask an email address
     * @param value the email to mask
     * @returns string
     */
    maskEmail(value: string): string {
        return MASKEMAIL(value)
    }
    /**
     * Provides a way to validate a custom validation or a default validation
     * @param name - the name of the validation
     **/
    validate(name: string, args: any[]) {
        if (this.customValidations[name]) {
            return this.customValidations[name].validation(...args);
        } else {
            switch (name) {
                case "email":
                    return this.email(args[0]);
                case "emailWithMessage":
                    return this.emailWithMessage(args[0]);
                case "phoneNumber":
                    return this.phoneNumber(args[0], args[1], args[2]);
                case "password":
                    return this.password(args[0], args[1], args[2], args[3]);
                case "passwordWithMessage":
                    return this.passwordWithMessage(args[0], args[1], args[2], args[3]);
                case "url":
                    return this.url(args[0]);
                case "length":
                    return this.length(args[0], args[1]);
                default:
                    throw new Error("The validation does not exist");
            }
        }
    }
}


const validator = new VALIDATOR();
export { VALIDATOR }
export default validator;