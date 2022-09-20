import { BaseResponse } from "../Base/BaseResponse"

export const isAuth = (req, res, next) => {
    if (req.user) {
        return next()
    }

    return res.status(401).json(
        new BaseResponse(false, "You are not authorized to access this resource")
    );
}