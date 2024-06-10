import { prisma } from "../utils/prisma";
import { permissions as permissionsList } from '../utils/permissions';
import { CustomRequest } from "../types/express";

class TasksService {
    public async getProjectsTasks(req: CustomRequest, userPermissions: string[], userId: number) {
        
        let tasksQuery;
        const page = req.query.page ? parseInt(req.query.page.toString(), 10) : 1;
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize.toString(), 10) : 10;
        let { projectId } = req.params;
        const selectedUsers = this.manageUsersRequest(req);

        switch (true) {
            case userPermissions.includes(permissionsList.VIEW_ALL_TASKS):
                if (selectedUsers && selectedUsers.length > 0) {
                    tasksQuery = { AND: [{ user: { username: {in: selectedUsers} } }, { task: { idProject: Number(projectId), enabled: true } }] };
                } else {
                    tasksQuery = { task: { idProject: Number(projectId), enabled: true }};
                }
                break;

            case userPermissions.includes(permissionsList.VIEW_OWNED_TASKS):
                tasksQuery = { AND: [{ idUser: { equals: userId } }, { task: { idProject: Number(projectId), enabled: true } }] };
                break;

            default:
                throw new Error("Forbidden: User has no permissions to see projects");
        }

        const tasks = await prisma.user_tasks.findMany({
            where: tasksQuery,
            distinct: ['idTask'],
            skip: (page - 1) * pageSize,
            take: pageSize,
            select: { task: true }
        });

        return {
            tasks: tasks.length > 0 ? tasks : null,
            message: tasks.length === 0 ? "There are no available tasks yet." : null
        };
    }

    private manageUsersRequest = (req: CustomRequest) => {
        let selectedUsers: string[] | undefined;
        
        if (typeof req.query.users === 'string') {
            selectedUsers = [req.query.users];
        } 
        if (Array.isArray(req.query.users)) {
            selectedUsers = req.query.users as string[];
        } 
        if (req.query.users === undefined) {
            selectedUsers = undefined;
        }
        return selectedUsers;
    }
}

export const tasksService = new TasksService();