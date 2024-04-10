import { Router } from "express";
import { authController } from "../controllers/auth.controller";

const router = Router();

router.post('/v1/auth/login', authController.login)

router.post('/v1/auth/register',authController.userRegister);

export default router;