

import { HASWINDOWOBJECT, ISFUNC, ISOBJ } from ".";
/**
 * Disables React Dev Tools
 */
export function DISABLEREACTDEVTOOLS() {
    if (HASWINDOWOBJECT()) {
        const windowAny = window as any;
        if (!ISOBJ(windowAny.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
            return;
        }

        // Replace all global hook properties with a no-op function or a null value
        for (const prop in windowAny.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
            if (prop === 'renderers') {
                // prevents console error when dev tools try to iterate of renderers
                windowAny.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = new Map();
                continue;
            }
            windowAny.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = ISFUNC(
                windowAny.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop]
            )
                ? Function.prototype
                : null;
        }
    }
}