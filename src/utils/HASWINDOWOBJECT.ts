import { ISBROWSER } from ".";


/**
 * Checks if the window object is available
 * @returns true if the window object is available
 */
function HASWINDOWOBJECT() {
    return ISBROWSER && window.document;
}

export default HASWINDOWOBJECT;