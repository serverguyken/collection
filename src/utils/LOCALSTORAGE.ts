
import ISCLIENT from "./ISCLIENT";

/**
 *  Save data to local storage
 * @param key   key of local storage
 * @param value value of local storage
 */
export const SAVELOCALSTORAGE = (key: string, value: any) => {
    if (ISCLIENT()) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};


/**
 * Get data from local storage
 * @param key  key of local storage
 * @param defaultValue  default value of local storage
*/
export const GETLOCALSTORAGE = (key: string, defaultValue?: any) => {
    if (ISCLIENT()) {
        const value = localStorage.getItem(key);
        if (value) {
            return JSON.parse(value);
        } else {
            return defaultValue || null;
        }
    }
    return defaultValue || null;
}


/**
 * Remove data from local storage
 * @param key  key of local storage
*/
export const REMOVELOCALSTORAGE = (key: string) => {
    if (ISCLIENT()) {
        localStorage.removeItem(key);
    }
}


/**
 *  Save data to session storage
 * @param key   key of session storage
 * @param value value of session storage
 */
export const SAVESESSIONSTORAGE = (key: string, value: any) => {
    if (ISCLIENT()) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
}

/**
 * Get data from session storage
 * @param key  key of session storage
 * @param defaultValue  default value of session storage
 */
export const GETSESSIONSTORAGE = (key: string, defaultValue?: any) => {
    if (ISCLIENT()) {
        const value = sessionStorage.getItem(key);
        if (value) {
            return JSON.parse(value);
        } else {
            return defaultValue || null;
        }
    }
    return defaultValue || null;
}

/**
 * Remove data from session storage
 * @param key  key of session storage
*/
export const REMOVESESSIONSTORAGE = (key: string) => {
    if (ISCLIENT()) {
        sessionStorage.removeItem(key);
    }
}