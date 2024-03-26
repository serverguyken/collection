

/**
 * Checks if the hours are in AM
 * @param hours  The hours string e.g 12:00am
 */
export const ISAM = (hours: string) => {
    return hours.includes('am');
}

/**
 * Checks if the hours are in PM
 * @param hours  The hours string e.g 12:00pm
 */
export const ISPM = (hours: string) => {
    return hours.includes('pm');
}