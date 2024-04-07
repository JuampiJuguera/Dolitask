import { Router } from "express";
import { rolesController } from "../controllers/roles.controller";

const router = Router();

router.get('/v1/roles', rolesController.getRoles);

router.post('/v1/createRole', rolesController.createRole);

router.put('/v1/updateRole/:id', rolesController.updateRole)

router.delete('/v1/deleteRole/:id', rolesController.deleteRole)

export default router;