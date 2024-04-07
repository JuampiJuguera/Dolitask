import { Router } from "express";
import { prisma } from "../utils/prisma";

const router = Router();

router.get('/v1/taskStatuses', async(req, res) => {
    const taskStatuses = await prisma.task_statuses.findMany();
    res.json(taskStatuses);
})

export default router;