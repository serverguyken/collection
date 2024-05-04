

import ISCLIENT from "./ISCLIENT";


/**
 * Save data to cookie
 * @param name name of cookie
 * @param value value to save
 * @param expires number of days to expire
 * 
 * NOTE: Works only on client side
 */
export const SAVECOOKIE = <Name extends string, Value extends any>(name: Name, value: Value, expires: number) => {
    if (ISCLIENT()) {
        const date = new Date();
        const expiresIn = date.setTime(date.getTime() + (expires));
        document.cookie = name + "=" + JSON.stringify(value) + ";expires=" + new Date(expiresIn).toUTCString() + ";path=/";
    }
}


/**
 * Get data from cookie
 * @param name name of cookie
 * 
 * NOTE: Works only on client side
*/
export const GETCOOKIE = <Name extends string, Value extends any>(name: Name): Value | null => {
    if (ISCLIENT()) {
        const n = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(n) == 0) {
                return JSON.parse(c.substring(n.length, c.length));
            }
        }
        return null;
    }
    return null;
}


/**
 * Remove data from cookie
 * @param name name of cookie
 * 
 * NOTE: Works only on client side
*/
export const REMOVECOOKIE = <Name extends string>(name: Name) => {
    if (ISCLIENT()) {
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    }
}