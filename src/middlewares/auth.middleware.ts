import { NextFunction, Response } from "express";
import { CustomRequest } from "../types/express"
import * as jwt from 'jsonwebtoken'
import { usersService } from "../services/users.service";

class AuthMiddleware {

    public authMiddleware = async(req: CustomRequest, res: Response, next: NextFunction) => {
        const token = req.headers.authorization;
        if (!token) return res.status(403).json({ code: 403, message: 'Unauthorized: No token provided' });;
        try {
            const accessTokenSecret = process.env.JWT_ACCESS_SECRET;
            if (!accessTokenSecret) throw new Error("JWT_ACCESS_SECRET is not defined");
            const payload = jwt.verify(token, accessTokenSecret) as any;
            const idUser = payload.idUser;
            if (!idUser) return res.status(403).json({ code: 403, message: 'idUser not found in token payload' });
            const user = await usersService.findUserById(idUser);
            if (!user) return res.status(403).json({ code: 403, message: 'Unauthorized: Invalid token' });
            req.user = user;
            next();

        } catch (error) {
            console.error('Authorization error: ', error);
            return res.status(500).json({ code: 500, message: 'Internal server error' });
        }
    }

}

export const authMiddleware = new AuthMiddleware();