import { Request, Response } from 'express';
import { prisma } from "../utils/prisma";
import { usersService } from '../services/users.service';
import { permissions as permissionsList } from '../utils/permissions';
import { CustomRequest } from '../types/express';

class ProjectsController {
    // Constructor

    // Methods
    public listProjects = async (req: CustomRequest, res: Response) => {
        const user = req.user;
        if (!user) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        try {
            const userPermissions = await usersService.getUserPermissions(user.id);

            const canViewAllProjects = userPermissions.includes(permissionsList.VIEW_ALL_PROJECTS);
            const canViewOwnProjects = userPermissions.includes(permissionsList.VIEW_OWNED_PROJECTS);

            if (canViewAllProjects) {
                const projects = await prisma.projects.findMany();
                return res.json(projects);
            }
            if (canViewOwnProjects) {
                const userProjects = await prisma.user_projects.findMany({
                    where: { idUser: user.id },
                    include: {
                        project: true
                    }
                });
                const projects = userProjects.map(userProject => userProject.project);
                return res.json(projects);
            }
            return res.status(403).json({ error: "Forbidden: User has no permissions to see projects" });
        } catch (error) {
            console.error("Error retrieving projects:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    };

    public createProject = async (req: Request, res: Response) => {
        try {
            const {name, URL_Drive, enabled, startDate, endDate} = req.body;
            const result = await prisma.projects.create({
                data: {
                    name, URL_Drive, enabled, startDate, endDate
                }
            });
            res.json(result);
        } catch (error) {
            console.error("Error creating project:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    };

    public updateProject = async (req: Request, res: Response) => {
        try {
            const {id} = req.params
            const {name, URL_Drive, enabled, startDate, endDate} = req.body;
            const result = await prisma.projects.update({
                where: {id: Number(id)},
                data: {
                    name, URL_Drive, enabled, startDate, endDate
                }
            });
            res.json(result);
        } catch (error) {
            console.error("Error updating project:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    };

    public deleteProject = async (req: Request, res: Response) => {
        try {
            const {id} = req.params
            const result = await prisma.projects.delete({
                where: {id: Number(id)}
            });
            res.json(result);
        } catch (error) {
            console.error("Error deleting project:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    };
}

export const projectsController = new ProjectsController();