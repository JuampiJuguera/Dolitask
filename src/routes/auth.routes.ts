import { Router } from "express";
import { authController } from "../controllers/auth.controller";

const router = Router();

router.post('/v1/user/login', )

router.post('/v1/user/register',authController.userRegister);

export default router;