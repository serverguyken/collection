

/**
 * Checks if the code is running in a client
 * @returns true if the code is running in a client
 */
const ISCLIENT = () => {
    return typeof window !== 'undefined';
}

export default ISCLIENT;