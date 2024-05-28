import { Router } from "express";
import { prisma } from "../utils/prisma";
import { projectsController } from "../controllers/projects.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { permissionsMiddleware } from "../middlewares/permissions.middleware";
import { permissions as permissionsList } from "../utils/permissions";

const router = Router();

const auth = authMiddleware;
const permissions = permissionsMiddleware;

router.get('/v1/projects/list', [auth.authMiddleware], projectsController.listProjects);

router.post('/v1/projects/create', [auth.authMiddleware, permissions.checkPermissions([permissionsList.MANAGE_PROJECTS])], projectsController.createProject);

router.put('/v1/projects/update/:id', [auth.authMiddleware, permissions.checkPermissions([permissionsList.MANAGE_PROJECTS])], projectsController.updateProject)

router.delete('/v1/projects/delete/:id', [auth.authMiddleware, permissions.checkPermissions([permissionsList.MANAGE_PROJECTS])], projectsController.deleteProject)

export default router;