import { Request, Response } from 'express';
import { authService } from '../services/auth.service';

class AuthController {

    public userRegister = async (req: Request, res: Response) => {
        try {
            const userData = req.body;
            const registrationSuccessful = await authService.userRegister(userData);
            if (registrationSuccessful) {
                return res.json({ message: "User registered successfully" });
            }
            return res.status(400).json({ error: "Username or email already exists" });
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