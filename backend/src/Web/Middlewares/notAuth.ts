import { BaseResponse } from "../Base/BaseResponse"

export const notAuth = (req, res, next) => {
    if (req.user) {
        return res.status(401).json(
            new BaseResponse(false, "You are not authorized to access this resource")
        );    
    }

    return next();
}