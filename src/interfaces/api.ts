export interface IAPIResponse<T> {
    data: T;
    status: {
        code: number;
        message: string;
        indication: "success" | "failure";
        statusCode?: string;
        timestamp?: string;
        path?: string;
        errors?: Array<{
            field: string;
            message: string;
            line?: number;
            column?: number;
        }>;
    }
}


/**
 * Response result
 */
export interface IResponseResult<IResponseStatus extends IAPIResponse<null>['status'], IResponseData> {
    status: IResponseStatus;
    data: IResponseData;
}
