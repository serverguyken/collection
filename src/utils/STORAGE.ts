
import { REMOVELOCALSTORAGE, REMOVESESSIONSTORAGE, REMOVECOOKIE, SAVECOOKIE, SAVESESSIONSTORAGE, SAVELOCALSTORAGE, GETSESSIONSTORAGE, GETLOCALSTORAGE, GETCOOKIE } from "../utils";



export const SAVESTORAGE = <Key extends string, Value extends any>(type: "session" | "local" | "cookie", key: Key, value: Value, expires?: number) => {
    switch (type) {
        case "session":
            SAVESESSIONSTORAGE<Key, Value>(key, value);
        case "local":
            SAVELOCALSTORAGE<Key, Value>(key, value);
        case "cookie":
            SAVECOOKIE<Key, Value>(key, value, expires || 1);
        default:
            SAVELOCALSTORAGE<Key, Value>(key, value);
    }
}
/**
 * The function `REMOVESTORAGE` removes a specified key from either session storage, local storage, or
 * cookies.
 * @param {"session" | "local" | "cookie"} type - The `type` parameter is a string that specifies the
 * type of storage to remove. It can have one of three values: "session", "local", or "cookie".
 * @param {string} key - The `key` parameter is a string that represents the key of the item you want
 * to remove from the storage.
 */
export const REMOVESTORAGE = <Key extends string>(type: "session" | "local" | "cookie", key: Key) => {   
    switch (type) {
        case "session":
            REMOVESESSIONSTORAGE<Key>(key);
        case "local":
            REMOVELOCALSTORAGE<Key>(key);
        case "cookie":
            REMOVECOOKIE<Key>(key);
        default:
            REMOVELOCALSTORAGE<Key>(key);
    }
}


/**
 * The function `GETSTORAGE` retrieves a value from either session storage, local storage, or a cookie
 * based on the specified type and key.
 * @param {"session" | "local" | "cookie"} type - The `type` parameter is a string that specifies the
 * type of storage to retrieve the value from. It can have one of three values: "session", "local", or
 * "cookie".
 * @param {string} key - The `key` parameter is a string that represents the key or name of the item
 * you want to retrieve from the storage.
 * @returns the value stored in the specified storage type (session, local, or cookie) for the given
 * key.
 */
export const GETSTORAGE = <Key extends string, Value extends any>(type: "session" | "local" | "cookie", key: Key): Value => {
    switch (type) {
        case "session":
            return GETSESSIONSTORAGE<Key, Value>(key) as Value;
        case "local":
            return GETLOCALSTORAGE<Key, Value>(key) as Value;
        case "cookie":
           GETCOOKIE<Key, Value>(key);
        default:
            return GETLOCALSTORAGE<Key, Value>(key) as Value;
    }
}