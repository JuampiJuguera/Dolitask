import { NextFunction, Response } from "express";
import { CustomRequest } from "../types/express"
import { usersService } from "../services/users.service";

class PermissionsMiddleware {

    public checkPermissions = (requiredPermissions: string[]) => {
        return async(req: CustomRequest, res: Response, next: NextFunction) => {
            try {
                const user = req.user;
                if (!user) return res.status(404).json({ code: 404, message: 'User not found' });
                const userPermissions = await usersService.getUserPermissions(user.id);
                const hasPermission = requiredPermissions.every(permission =>
                    userPermissions.includes(permission)
                  );
                if (hasPermission) {
                    next();
                } else {
                    return res.status(403).json({ code: 403, message: 'Forbidden: Insufficient permission' });
                }
            } catch (error) {
                console.error('Authorization error: ', error);
                return res.status(500).json({ code: 500, message: 'Internal server error' });
            }
        } 
    }

}

export const permissionsMiddleware = new PermissionsMiddleware();