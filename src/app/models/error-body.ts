export interface ErrorBody {
    error: {
        status_code: number,
        status_message: string,
        success: boolean
    },
    headers: any,
    message: string,
    name: string,
    ok: boolean,
    status: number,
    statusText: string,
    url: string
}