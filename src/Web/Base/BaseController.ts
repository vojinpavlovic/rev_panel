import { Response } from 'express';
import { injectable } from 'inversify';

@injectable()
export abstract class BaseController {
    public ok<T>(res: Response, dto?: T) {
        if (!!dto) {
            return res.status(200).json(dto);
        }

        return res.status(200).end();
    }

    public created<T>(res: Response, dto?: T) {
        if (!!dto) {
            return res.status(201).json(dto);
        }

        return res.sendStatus(201);
    }

    public notFound(res: Response, message?: string) {
        if (!!message) {
            return res.status(404).json(message);
        }

        return res.sendStatus(404);
    }

    public fail(res: Response, message?: string) {
        if (!!message) {
            return res.status(500).json(message);
        }

        return res.sendStatus(500);
    }
}