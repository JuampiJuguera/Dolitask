import { Request, Response } from 'express';
import { prisma } from "../utils/prisma";
import { usersService } from '../services/users.service';
import { permissions as permissionsList } from '../utils/permissions';
import { CustomRequest } from '../types/express';
import { projectsService } from '../services/projects.service';

class ProjectsController {
    // Constructor

    // Methods
    public listProjects = async (req: CustomRequest, res: Response) => {
        const user = req.user;
        if (!user) {
            return res.status(401).json({ error: "Unauthorized Access" });
        }
        try {
            const userPermissions = await usersService.getUserPermissions(user.id);
                const userId = user.id;
                const {projects, message} = await projectsService.getProjectsForUser(userId, userPermissions);
                return res.json({projects, message});
        } catch (error) {
            if (error instanceof Error && error.message === "Forbidden: User has no permissions to see projects") {
                return res.status(403).json({ error: error.message });
            }
            throw error;
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

    public assignUsersToProject = async (req: Request, res: Response) => {
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