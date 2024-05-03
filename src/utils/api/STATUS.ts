

import { IResponseResult } from "../../interfaces/api";
import { TResponseStatus } from "../../types";

export const STATUSCODES = {
    200: 'OK',
    201: 'CREATED',
    202: 'ACCEPTED',
    203: 'NON_AUTHORITATIVE_INFORMATION',
    204: 'NO_CONTENT',
    205: 'RESET_CONTENT',
    206: 'PARTIAL_CONTENT',
    207: 'MULTI_STATUS',
    208: 'ALREADY_REPORTED',
    226: 'IM_USED',
    300: 'MULTIPLE_CHOICES',
    301: 'MOVED_PERMANENTLY',
    302: 'FOUND',
    303: 'SEE_OTHER',
    304: 'NOT_MODIFIED',
    305: 'USE_PROXY',
    306: 'RESERVED',
    307: 'TEMPORARY_REDIRECT',
    308: 'PERMANENT_REDIRECT',
    400: 'BAD_REQUEST',
    401: 'UNAUTHORIZED',
    402: 'PAYMENT_REQUIRED',
    403: 'OPERATION_NOT_ALLOWED',
    404: 'NOT_FOUND',
    405: 'METHOD_NOT_ALLOWED',
    406: 'NOT_ACCEPTABLE',
    407: 'PROXY_AUTHENTICATION_REQUIRED',
    408: 'REQUEST_TIMEOUT',
    409: 'CONFLICT',
    410: 'GONE',
    411: 'LENGTH_REQUIRED',
    412: 'PRECONDITION_FAILED',
    413: 'PAYLOAD_TOO_LARGE',
    414: 'URI_TOO_LONG',
    415: 'UNSUPPORTED_MEDIA_TYPE',
    416: 'RANGE_NOT_SATISFIABLE',
    417: 'EXPECTATION_FAILED',
    418: 'IM_A_TEAPOT',
    421: 'MISDIRECTED_REQUEST',
    422: 'UNPROCESSABLE_ENTITY',
    423: 'LOCKED',
    424: 'FAILED_DEPENDENCY',
    500: 'INTERNAL_SERVER_ERROR',
    501: 'NOT_IMPLEMENTED',
    502: 'BAD_GATEWAY',
    503: 'SERVICE_UNAVAILABLE',
    504: 'GATEWAY_TIMEOUT',
    505: 'HTTP_VERSION_NOT_SUPPORTED',
    506: 'VARIANT_ALSO_NEGOTIATES',
    507: 'INSUFFICIENT_STORAGE',
    508: 'LOOP_DETECTED',
    509: 'BANDWIDTH_LIMIT_EXCEEDED',
    510: 'NOT_EXTENDED',
    511: 'NETWORK_AUTHENTICATION_REQUIRED'
} as const;

type TCreateStatusS<Code extends keyof typeof STATUSCODES | number, ErrInt extends number, Message extends string, StatusCode extends string, Timestamp extends string, Path extends string, Errors extends TResponseStatus['errors']> = {
    code: keyof typeof STATUSCODES | number,
    errInt: number,
    message: string,
    statusCode?: string,
    timestamp?: string,
    path?: string,
    errors?: TResponseStatus['errors']
}
/**
 * Creates a response status object
 * @param code  The response code
 * @param errInt  Code to indicate if the response is an error or not. 0 = success, 1 = failure
 * @param message  The status message
 * @param statusCode  The status code e.g. "OK" or "UNAUTHORIZED"
 * @param timestamp  The timestamp of when the response was created
 * @param path  The path of the request
 * @param errors  The errors that occurred
 */
export function CREATESTATUS<Code extends keyof typeof STATUSCODES | number, ErrInt extends number, Message extends string, StatusCode extends string, Timestamp extends string, Path extends string, Errors extends TResponseStatus['errors']>(code: Code, errInt: ErrInt, message: Message, statusCode?: StatusCode, timestamp?: Timestamp, path?: Path, errors?: Errors): TResponseStatus {
    const indication = errInt === 0 ? 'success' : 'failure';

    const GetStatusCode = (code: keyof typeof STATUSCODES | number) => {
        if (STATUSCODES[code as keyof typeof STATUSCODES]) {
            return STATUSCODES[code as keyof typeof STATUSCODES];
        } else {
            return 'UNKNOWN_STATUS_CODE';
        }
    }
    const status: TResponseStatus = {
        code,
        indication,
        message,
        statusCode: statusCode ? statusCode : GetStatusCode(code),
        timestamp: timestamp ? timestamp : new Date().toISOString(),
        path: path ? path : '',
        errors: errors ? errors : []
    }
    return status;
}
/**
 * Creates a response status object
 * @param code  The response code
 * @param errInt  Code to indicate if the response is an error or not. 0 = success, 1 = failure
 * @param message  The status message
 * @param statusCode  The status code e.g. "OK" or "UNAUTHORIZED"
 * @param timestamp  The timestamp of when the response was created
 * @param path  The path of the request
 * @param errors  The errors that occurred
 */

export function CREATESTATUSV2<Code extends keyof typeof STATUSCODES | number, ErrInt extends number, Message extends string, StatusCode extends string, Timestamp extends string, Path extends string, Errors extends TResponseStatus['errors']>({ code, errInt, message, statusCode, timestamp, path, errors }: TCreateStatusS<Code, ErrInt, Message, StatusCode, Timestamp, Path, Errors>): TResponseStatus {
    const indication = errInt === 0 ? 'success' : 'failure';

    const GetStatusCode = (code: keyof typeof STATUSCODES | number) => {
        if (STATUSCODES[code as keyof typeof STATUSCODES]) {
            return STATUSCODES[code as keyof typeof STATUSCODES];
        } else {
            return 'UNKNOWN_STATUS_CODE';
        }
    }
    const status: TResponseStatus = {
        code,
        indication,
        message,
        statusCode: statusCode ? statusCode : GetStatusCode(code),
        timestamp: timestamp ? timestamp : new Date().toISOString(),
        path: path ? path : '',
        errors: errors ? errors : []
    }
    return status;
}
/**
 * Creates a response object
 * @param status The status to return
 * @param data  The data to return
 */
export const CREATERESPONSE = <IResponseData>(status: TResponseStatus, data: IResponseData): IResponseResult<TResponseStatus, IResponseData> => {
    return {
        status,
        data
    }
}
/**
 * Creates a response object
 * @param status The status to return
 * @param data  The data to return
 */
export const CREATERESPONSEV2 = <IResponseData>({ status, data }: { status: TResponseStatus, data: IResponseData }): IResponseResult<TResponseStatus, IResponseData> => {
    return {
        status,
        data
    }
}