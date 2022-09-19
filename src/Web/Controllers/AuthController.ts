import { Request, Response } from "express";
import { BaseHttpController, controller, httpGet, httpPost, requestBody } from "inversify-express-utils";

@controller('/auth')
export class AuthController extends BaseHttpController {
    @httpPost('/login')
    async login(@requestBody() title : string) {
        return title; 
    }

    @httpPost('/register')
    async register() {

    }

    @httpGet('/logout')
    async logout() {

    }
}