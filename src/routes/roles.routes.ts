import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();

const prisma = new PrismaClient();

router.get('/roles', async(req, res) => {
    const roles = await prisma.roles.findMany();
    res.json(roles);
})

export default router;