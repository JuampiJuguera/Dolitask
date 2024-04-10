import { Request, Response } from 'express';
import { authService } from '../services/auth.service';

class AuthController {

    public userRegister = async (req: Request, res: Response) => {
        try {
            const userData = req.body;
            const result = await authService.userRegister(userData);
            if(result.code != 200) return res.status(result.code).json({
                message: result.message,
                success: false
            })
            return res.status(200).json({ message: result.message, user: result.user, accessToken: result.accessToken, refreshToken: result.refreshToken ,success: true })
        } catch (error) {
            console.error("Error at register user:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    // public login = async (_req: Request, res: Response) => {
    //     try {
    //         const response = // login;
    //         res.json(response);
    //     } catch (error) {
    //         console.error("Error retrieving roles:", error);
    //         res.status(500).json({ error: "Internal server error" });
    //     }
    // };

}


export const authController = new AuthController();