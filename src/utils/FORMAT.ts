

interface IFormatStringToURL {
    strToFormat: string;
    regex?: "space" | "hyphen" | "underscore";
    separator?: string;
    toLowerCase?: boolean;
}


interface IUnformatStringToURL {
    strToFormat: string;
    regex?: "space" | "hyphen" | "underscore";
    separator?: string;
    toLowerCase?: boolean;
    capitalize?: boolean;
}


import { CAPITALIZEEACHWORD } from "./CAPITALIZE";

/**
 * Format a string to URL format e.g. "Hello World" to "hello-world"
 * @param strToFormat - The string to format
 * @param regex - The regex to use for formatting accepted values are "space" | "hyphen" | "underscore"
 * @param separator - The separator to use for formatting
 * @param toLowerCase - Whether to convert the string to lowercase or not
 * 
 * NOTE: Default values are "space" for regex, "-" for separator and true for toLowerCase
 * @example
 * const formattedStr = FORMATSTRINGTOURL("Hello World", "space", "-", true); // returns "hello-world"
 */

export function FORMATSTRINGTOURL(strToFormat: string): string;
export function FORMATSTRINGTOURL({ strToFormat, regex, separator, toLowerCase }: IFormatStringToURL): string;
export function FORMATSTRINGTOURL(props: any): string {
    if (typeof props === "string") {
        const formattedStr = props.replace(/\s/g, "-");
        return formattedStr.toLowerCase();
    }
    const { strToFormat, regex="space", separator= "-", toLowerCase= true } = props;
    if (regex === "space") {
        const formattedStr = strToFormat.replace(/\s/g, separator);
        return toLowerCase ? formattedStr.toLowerCase() : formattedStr;
    } else if (regex === "hyphen") {
        const formattedStr = strToFormat.replace(/-/g, separator);
        return toLowerCase ? formattedStr.toLowerCase() : formattedStr;
    } else if (regex === "underscore") {
        const formattedStr = strToFormat.replace(/_/g, separator);
        return toLowerCase ? formattedStr.toLowerCase() : formattedStr;
    } else {
        const formattedStr = strToFormat.replace(/\s/g, separator);
        return toLowerCase ? formattedStr.toLowerCase() : formattedStr;
    }
}

/**
 *  Unformat a string to normal format e.g. "hello-world" to "Hello World"
  * @param strToFormat - The string to format
 * @param regex - The regex to use for formatting accepted values are "space" | "hyphen" | "underscore"
 * @param separator - The separator to use for formatting
 * @param toLowerCase - Whether to convert the string to lowercase or not
 * @param capitalize - Whether each word should be capitalized or not
 * 
 * NOTE: Default values are "hyphen" for regex, " " for separator and true for toLowerCase
 * @example
 * const formattedStr = UNFORMATSTRINGTOURL("hello-world", "hyphen", " ", true); // returns "hello world"
 */

export function UNFORMATSTRINGTOURL(strToFormat: string): string;
export function UNFORMATSTRINGTOURL({ strToFormat, regex, separator, toLowerCase, capitalize }: IUnformatStringToURL): string;
export function UNFORMATSTRINGTOURL(props: any): string {
    // unformat the string back to normal
    if (typeof props === "string") {
        const formattedStr = props.replace(/-/g, " ");
        return CAPITALIZEEACHWORD(formattedStr);
    }
    const { strToFormat, regex="hyphen", separator= "-", toLowerCase= true, capitalize= true } = props;
    if (regex === "space") {
        const formattedStr = strToFormat.replace(/\s/g, separator);
        return toLowerCase ? formattedStr.toLowerCase() : capitalize ? CAPITALIZEEACHWORD(formattedStr) : formattedStr;
    } else if (regex === "hyphen") {
        const formattedStr = strToFormat.replace(/-/g, separator);
        return toLowerCase ? formattedStr.toLowerCase() : capitalize ? CAPITALIZEEACHWORD(formattedStr) : formattedStr;
    } else if (regex === "underscore") {
        const formattedStr = strToFormat.replace(/_/g, separator);
        return toLowerCase ? formattedStr.toLowerCase() : capitalize ? CAPITALIZEEACHWORD(formattedStr) : formattedStr;
    } else {
        const formattedStr = strToFormat.replace(/-/g, separator);
        return toLowerCase ? formattedStr.toLowerCase() : capitalize ? CAPITALIZEEACHWORD(formattedStr) : formattedStr;
    }
}