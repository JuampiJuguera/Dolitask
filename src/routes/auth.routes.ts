import { Router } from "express";
import { authController } from "../controllers/auth.controller";
import { formValidationMiddleware } from "../middlewares/formValidation.middleware";
import { signUpSchema, loginSchema } from "../schema/auth.schema";
import { authMiddleware } from "../middlewares/auth.middleware";
import { permissionsMiddleware } from "../middlewares/permissions.middleware";
import { permissions as permissionsList } from "../utils/permissions";

const router = Router();
const validations = formValidationMiddleware;
const auth = authMiddleware;

const permissions = permissionsMiddleware;

router.post('/v1/auth/login', validations.validateForm(loginSchema),  authController.login)

router.post('/v1/auth/register', validations.validateForm(signUpSchema), authController.userRegister);

router.get('/v1/auth/userInfo', [auth.authMiddleware, permissions.checkPermissions([permissionsList.MANAGE_PROJECTS])] ,authController.userInfo);

export default router;