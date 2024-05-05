import { Request, Response } from 'express';
import { authService } from '../services/auth.service';
import { CustomRequest } from '../types/express';

class AuthController {

    public userRegister = async (req: Request, res: Response) => {
        try {
            const userData = req.body;
            const result = await authService.userRegister(userData);
            if(result.code != 200) return res.status(result.code).json({
                message: result.message,
                success: false
            })
            return res.status(200).json({ message: result.message, user: result.user, success: true })
        } catch (error) {
            console.error("Error at register user:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const userData = req.body;
            const result = await authService.login(userData);
            if(result.code != 200) return res.status(result.code).json({
                message: result.message,
                success: false
            })
            return res.status(200).json({ message: result.message, user: result.user, token: result.token, success: true })
        } catch (error) {
            console.error("Error at login: ", error);
            res.status(500).json({ error: "Internal server error" });
        }
    };

    public userInfo = async (req: CustomRequest, res: Response) => {
        try {
            return res.status(200).json(req.user)
        } catch (error) {
            console.error("Authorization Error: ", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    };

}


export const authController = new AuthController();