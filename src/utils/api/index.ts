
import { TReturnValue } from "../../types";
import { CREATESTATUS, CREATERESPONSE, STATUSCODES } from "./STATUS";
import { _ERRORCODESMESSAGES } from "../../constants/api"


export interface IAPIResponse<T> {
    data: T;
    status: {
        code: number;
        message: string;
        indication: "success" | "failure";
    }
}



/**
 *  A standard API response object that returns the CREATESTATUS and CREATERESPONSE reponse type
 * @param err -  The error to check
 * @returns 
 */
export const ISAPIRES = (err: any): { isValidResponse: boolean, error?: IAPIResponse<any> | any } => {
    if (err.response?.data !== undefined) {
        if (err.response.data.status !== undefined) {
            return {
                isValidResponse: true,
                error: err.response.data
            }
        } else {
            if (typeof err.response.data === "string") {
                const status = CREATESTATUS(err.response.status, 1, err.response.status === 404 ? "Resource not found." : "Unknown error occurred.");
                const response = CREATERESPONSE(status, null);
                return {
                    isValidResponse: true,
                    error: response
                };
            }  else {
                return {
                    isValidResponse: false,
                    error: "Unknown error occurred."
                }
            }
        }
    } else {
        return {
            isValidResponse: false,
            error: {
                data: null,
                status: {
                    code: 500,
                    message: "Unknown error occurred.",
                    indication: "failure"
                }
            }
        }
    }
}


/**
 * Returns a message from relating to a status code
 * @param code - The status code
 * @example
 * const message = GETSTATUSMESSAGE(404); // "The requested resource was not found."
 */

export const GETSTATUSMESSAGE = <TCode extends  keyof typeof _ERRORCODESMESSAGES | number> (code: TCode): TReturnValue<TCode, typeof _ERRORCODESMESSAGES> => {
    if (_ERRORCODESMESSAGES[code as keyof typeof _ERRORCODESMESSAGES]) {
        const message = _ERRORCODESMESSAGES[code as keyof typeof _ERRORCODESMESSAGES];
        return message as TReturnValue<TCode, typeof _ERRORCODESMESSAGES>;
    } else {
        const message = _ERRORCODESMESSAGES[1001 as keyof typeof _ERRORCODESMESSAGES];
        return message as TReturnValue<TCode, typeof _ERRORCODESMESSAGES>;
    }
}
// "The requested resource was not found."

export { CREATESTATUS, CREATERESPONSE, STATUSCODES }