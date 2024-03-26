/*
 * Created on Wed Apr 26 2023
 *
 * Copyright (c) 2023 Shopascart
 */

import { TReturnValue } from "../../types";

/**
 * Get the error message from the error code
 * @param error The error code
 * @returns 
 */

const errors = {
    "auth/MISSING_REQUIRED_DATA": "An error has occurred. Please contact support.",
    "auth/invalid-email": "Invalid email.",
    "auth/user-disabled": "This account is deactivated or disabled. If you think this is a mistake, please contact support.",
    "auth/user-not-found": "This account does not exist.",
    "auth/wrong-password": "Invalid email or password.",
    "auth/email-already-in-use": "The email address is already in use by another account.",
    "auth/email-already-exists": "The email address is already in use by another account.",
    "auth/phone-number-already-exists": "The phone number is already in use by another account.",
    "auth/invalid-phone-number": "Invalid phone number.",
    "auth/invalid-verification-code": "Invalid verification code.",
    "auth/invalid-verification-id": "Invalid verification ID.",
    "auth/invalid-continue-uri": "Invalid continue URI.",
    "auth/invalid-hash-algorithm": "Invalid hash algorithm.",
    "auth/email-not-found": "This account does not exist.",
    "auth/operation-not-allowed": "An error has occurred. Please contact support.",
    "auth/invalid-tenant-id": "Invalid tenant ID. Please contact support.",
    "auth/session-cookie-revoked": "An error has occurred. Please contact support.",
} as const;
export type TTypeUnionHelper<T extends string> = T | Omit<string, T>;
export default function GETAUTHERROR<T extends TTypeUnionHelper<keyof typeof errors>>(error: T): TReturnValue<T, typeof errors> {

    if (errors[error as keyof typeof errors]) {
        return errors[error as keyof typeof errors] as TReturnValue<T, typeof errors>;
    } else {
        return "An error has occurred. Please contact support." as TReturnValue<T, typeof errors>;
    }
}
