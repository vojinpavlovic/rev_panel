import { Response } from 'express';

export class BaseController {
    public ok<T>(res: Response, dto?: T) {
        if (!!dto) return res.status(200).json(dto);

        return res.status(200).end();
    }

    public created<T>(res: Response, dto?: T) {
        if (!!dto) return res.status(201).json(dto);

        return res.sendStatus(201);
    }
}