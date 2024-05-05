import { Router } from "express";
import { authController } from "../controllers/auth.controller";
import { formValidationMiddleware } from "../middlewares/formValidation.middleware";
import { signUpSchema, loginSchema } from "../schema/auth.schema";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();
const validations = formValidationMiddleware;
const auth = authMiddleware;

router.post('/v1/auth/login', validations.validateForm(loginSchema),  authController.login)

router.post('/v1/auth/register', validations.validateForm(signUpSchema), authController.userRegister);

router.get('/v1/auth/userInfo', auth.authMiddleware ,authController.userInfo);

export default router;