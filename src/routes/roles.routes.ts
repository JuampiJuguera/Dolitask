import { Router } from "express";
import { rolesController } from "../controllers/roles.controller";

const router = Router();

router.get('/roles', rolesController.getRoles);

router.post('/createRole', rolesController.createRole);

// router.put('/updateRole', rolesController.updateRole)

//router.delete('/deleteRole', rolesController.deleteRole)

export default router;