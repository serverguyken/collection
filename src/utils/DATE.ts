
import moment from "moment";
/**
 *  A collection of date functions to help with date manipulation
 */
const DATE = () => {
    return {
        today: moment().format("MM/DD/YYYY"),
        addMonths: (months: number) => moment().add(months, "months").format("MM/DD/YYYY"),
        inTimestamp: () => moment().format('YYYY-MM-DD HH:mm:ss'),
        format: (date: string, format?: string) => moment(date).format(format || "MM/DD/YYYY"),
        formatTimestamp: (date: string, format?: string) => moment(date).format(format || "YYYY-MM-DD HH:mm:ss"),
        formatTimestampHMS: (date: string, format?: string) => moment(date).format(format || "HH:mm:ss"),
        formatTimestampHM: (date: string, format?: string) => moment(date).format(format || "HH:mm"),
        prismaDate: () => new Date().toISOString(),
        toISOString: () => new Date().toISOString(),
        toTimestamp: (date?: string) => moment(date).toISOString(),
        build: moment
    }
}

export default DATE;