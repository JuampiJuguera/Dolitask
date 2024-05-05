import { NextFunction, Request, Response } from "express";

class AuthMiddleware {

    public authMiddleware = async(req: Request, res: Response, next: NextFunction) => {
        
    }

}

export const authMiddleware = new AuthMiddleware();