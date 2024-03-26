
import moment from 'moment';
/**
 *  A helper function to get date in different formats
 * @param date 
 */
const DATEHELPER = (date: Date) => {
    const d = moment(date);
    return {
        getDay: () => {
            return d.format('DD');
        },
        getMonth: () => {
            return d.format('MMM');
        },
        getYear: () => {
            return d.format('YYYY');
        },
    }
};

export default DATEHELPER;