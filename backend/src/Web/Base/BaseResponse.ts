export class BaseResponse {
    public status: boolean;
    public message: string;
    public data: any;

    constructor(status: boolean = false, message: string = "", data?: any) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}