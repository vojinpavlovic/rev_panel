import "reflect-metadata";
import { cleanUpMetadata } from "inversify-express-utils";
import { AuthController } from "../../../src/Web/Controllers/AuthController";

describe("Auth Controller", () => {
    const authController = new AuthController();

    beforeEach(done => {
        cleanUpMetadata();
        done();
    });
      
    it('Is it defined', () => expect(authController).toBeDefined())

    it('Is login method defined', () => expect(authController.login).toBeDefined())

    it('Is registration method defined', () => expect(authController.register).toBeDefined())

    it('Is logout method defined', () => expect(authController.logout).toBeDefined())

    describe("POST /auth/login", () => {

    })
})