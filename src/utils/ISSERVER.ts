
/**
 * Checks if the code is running on the server
 * @returns true if the code is running on the server
 */
const ISSERVER = typeof window === 'undefined';

export default ISSERVER;