export class BaseResponse {
    public status: boolean;
    public message: string;

    constructor(status: boolean = false, message: string = "") {
        this.status = status;
        this.message = message;
    }
}