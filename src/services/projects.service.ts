import { prisma } from "../utils/prisma";
import { permissions as permissionsList } from '../utils/permissions';

class ProjectsService {
    public async getProjectsForUser(userId: number, userPermissions: string[]) {
        const canViewAllProjects = userPermissions.includes(permissionsList.VIEW_ALL_PROJECTS);
        const canViewOwnProjects = userPermissions.includes(permissionsList.VIEW_OWNED_PROJECTS);

        if (canViewAllProjects) {
            const projects = await prisma.projects.findMany();
            return {
                projects: projects.length > 0 ? projects : null,
                message: projects.length === 0 ? "There are no available projects yet. Be the first to create one." : null
            };
        }
        if (canViewOwnProjects) {
            const userProjects = await prisma.user_projects.findMany({
                where: { idUser: userId },
                include: {
                    project: true
                }
            });

            const projects = userProjects.map(userProject => userProject.project);
            return {
                projects: projects.length > 0 ? projects : null,
                message: projects.length === 0 ? "There are no available projects yet. Wait to be assigned to one." : null
            };
        }

        throw new Error("Forbidden: User has no permissions to see projects");
    }
}

export const projectsService = new ProjectsService();