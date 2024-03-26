import { IAPIResponse } from "../../interfaces";
import GETAUTHERROR from "./GETAUTHERROR";
export const errors = {
    "auth/user-not-found": "USER_NOT_FOUND",
    "auth/session-cookie-revoked": "SESSION_COOKIE_REVOKED",
    "auth/MISSING_REQUIRED_DATA": "MISSING_REQUIRED_DATA",
    "auth/invalid-email": "INVALID_EMAIL",
    "auth/user-disabled": "USER_DISABLED",
    "auth/wrong-password": "WRONG_PASSWORD",
    "auth/email-not-found": "EMAIL_NOT_FOUND",
    "auth/email-already-in-use": "EMAIL_ALREADY_IN_USE",
    "auth/email-already-exists": "EMAIL_ALREADY_EXISTS",
    "auth/phone-number-already-exists": "PHONE_NUMBER_ALREADY_EXISTS",
    "auth/invalid-phone-number": "INVALID_PHONE_NUMBER",
    "auth/invalid-verification-code": "INVALID_VERIFICATION_CODE",
    "auth/invalid-verification-id": "INVALID_VERIFICATION_ID",
    "auth/invalid-continue-uri": "INVALID_CONTINUE_URI",
    "auth/invalid-hash-algorithm": "INVALID_HASH_ALGORITHM",
    "auth/operation-not-allowed": "OPERATION_NOT_ALLOWED",
    "auth/invalid-tenant-id": "INVALID_TENANT_ID",
    "auth/unknown-error": "UNKNOWN_ERROR",
    "auth/not-authenticated": "NOT_AUTHENTICATED",
    "auth/not-authorized": "NOT_AUTHORIzED",
} as const;


export type TERRORRETURN<TERROR> = TERROR extends keyof typeof errors ? typeof errors[TERROR] : "UNKNOWN_ERROR";
export type TERROR = keyof typeof errors;
export function CREATEERRORTYPE<TERROR extends keyof typeof errors>(error: TERROR extends keyof typeof errors ? TERROR : TERROR extends string ? TERROR : never): TERRORRETURN<TERROR> {

    if (errors[error as keyof typeof errors]) {
        return errors[error as keyof typeof errors] as TERRORRETURN<TERROR>;
    } else {
        return "UNKNOWN_ERROR" as TERRORRETURN<TERROR>;
    }
}



/**
 *  Check if the error is a Shopascart API response
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
                return {
                    isValidResponse: true,
                    error: {
                        data: null,
                        status: {
                            code: err.response.status,
                            message: err.response.status === 404 ? "Resource not found." : "Unknown error occurred.",
                            indication: "failure"
                        }
                    }
                };
            } else {
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

export { GETAUTHERROR }
