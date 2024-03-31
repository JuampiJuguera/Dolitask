import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();

const prisma = new PrismaClient();

router.get('/taskStatuses', async(req, res) => {
    const taskStatuses = await prisma.task_statuses.findMany();
    res.json(taskStatuses);
})

export default router;