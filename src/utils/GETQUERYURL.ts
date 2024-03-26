

import { STRICTEMPTY, ISEMPTY } from "./ISEMPTY";

/**
 * Return an encoded query url if the query path is not empty
 * @param queryPath 
 * @param default_url 
 */
export function GETQUERYURL(queryPath: string, defaultUrl: string, strictCheck: boolean = true): {
    nextUrl: string;
    encodedUrl: string;
} {
    const url_ = strictCheck ? STRICTEMPTY(queryPath) ? defaultUrl : queryPath : ISEMPTY(queryPath) ? defaultUrl : queryPath;
    const isEncoded = decodeURIComponent(url_) !== url_;
    if (isEncoded) {
        const next = decodeURIComponent(url_);
        const url = next.startsWith("/") ? next : "/" + next;
        return {
            nextUrl: url,
            encodedUrl: encodeURIComponent(url)
        }
    } else {
        const url = url_.startsWith("/") ? url_ : "/" + url_;
        return {
            nextUrl: url,
            encodedUrl: encodeURIComponent(url)
        }
    }
}


/**
 *  Return an encoded query url
 * @param nextUrl  The next url
 */
export function SetRedirectUrl(nextUrl: string): {
    url: string;
    encodedUrl: string;
} {
    const url = nextUrl.startsWith("/") ? nextUrl : "/" + nextUrl;
    return {
        url: url,
        encodedUrl: encodeURIComponent(url)
    }
}