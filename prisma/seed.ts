import { roles } from "./seeds/roles";
import { taskPriorities } from "./seeds/taskPriorities";
import { taskStatuses } from "./seeds/taskStatuses";
import { taskTypes } from "./seeds/taskTypes";
import { permissions } from "./seeds/permissions";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    for (let role of roles) {
        await prisma.roles.create({
            data: role
        })
    }
    for (let taskPriority of taskPriorities) {
        await prisma.task_priorities.create({
            data: taskPriority
        })
    }
    for (let taskStatus of taskStatuses) {
        await prisma.task_statuses.create({
            data: taskStatus
        })
    }
    for (let taskType of taskTypes) {
        await prisma.task_types.create({
            data: taskType
        })
    }

    for (let permission of permissions) {
        await prisma.permissions.create({
            data: permission
        })
    }
}

main().catch(e => {
    console.log(e);
    process.exit(1)
}).finally(() => {
    prisma.$disconnect();
})
