

/**
 * Converts a 12 hour time to 24 hour time (military time) or vice versa
 * @param hours 
 * @param meridiem 
 * @returns 
 */
export const TO24HOURS = (hours: number, meridiem: "am" | "pm"): number => {
    if (meridiem === "am") {
        const h = hours === 12 ? 0 : hours;
        return h;
    } else {
        const h = hours === 12 ? 12 : hours + 12;
        return h;
    }
}


/**
 * Converts a string of hours to a time object
 * @param hours 
 * @param toMilitary 
 * @example
 * const time = HoursStringToTime('12:00am', true); // { hours: 12, minutes: 0, meridiem: "am" }
 * const time = HoursStringToTime('2:30pm', true); // { hours: 14, minutes: 30, meridiem: "pm" }
 */    
export const HOURSSTRINGTOTIME = (hours: string, toMilitary: boolean): {
    hours: number;
    minutes: number;
    meridiem: "am" | "pm";
} => {
    const hoursString = hours.replace(':00', '').replace('am', '').replace('pm', '');
    const minutesString = hours.split(':')[1].replace('am', '').replace('pm', '');
    const hoursNumber = parseInt(hoursString);

    if (toMilitary) {
        if (hours.includes('pm')) {
            const h = hoursNumber === 12 ? 12 : hoursNumber + 12;
            const m = parseInt(minutesString);
            return {
                hours: h,
                minutes: m,
                meridiem: "pm"
            }
        } else {
            const h = hoursNumber;
            const m = parseInt(minutesString);
            return {
                hours: h,
                minutes: m,
                meridiem: "am"
            }
        }
    } else {
        const h = hoursNumber;
        const m = parseInt(minutesString);
        return {
            hours: h,
            minutes: m,
            meridiem: hours.includes('pm') ? "pm" : "am"
        }
    }
}