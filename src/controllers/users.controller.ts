import { Request, Response } from 'express';
import { prisma } from "../utils/prisma";
import { usersService } from '../services/users.service';
import { permissions as permissionsList } from '../utils/permissions';
import { CustomRequest } from '../types/express';
import { tasksService } from '../services/tasks.service';

class TasksController {
    // hacer
    public getUsers = async (_req: Request, res: Response) => {
        try {
            const roles = await prisma.roles.findMany();
            res.json(roles);
        } catch (error) {
            console.error("Error retrieving roles:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    };
    // hacer
    public disableUser = async (_req: Request, res: Response) => {
        try {
            const roles = await prisma.roles.findMany();
            res.json(roles);
        } catch (error) {
            console.error("Error retrieving roles:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    };

    // public createProject = async (req: Request, res: Response) => {
    //     try {
    //         const {name, URL_Drive, enabled, startDate, endDate} = req.body;
    //         const result = await prisma.projects.create({
    //             data: {
    //                 name, URL_Drive, enabled, startDate, endDate
    //             }
    //         });
    //         res.json(result);
    //     } catch (error) {
    //         console.error("Error creating project:", error);
    //         res.status(500).json({ error: "Internal server error" });
    //     }
    // };

    // public updateProject = async (req: Request, res: Response) => {
    //     try {
    //         const {id} = req.params
    //         const {name, URL_Drive, enabled, startDate, endDate} = req.body;
    //         const result = await prisma.projects.update({
    //             where: {id: Number(id)},
    //             data: {
    //                 name, URL_Drive, enabled, startDate, endDate
    //             }
    //         });
    //         res.json(result);
    //     } catch (error) {
    //         console.error("Error updating project:", error);
    //         res.status(500).json({ error: "Internal server error" });
    //     }
    // };

    // public deleteProject = async (req: Request, res: Response) => {
    //     try {
    //         const {id} = req.params
    //         const result = await prisma.projects.delete({
    //             where: {id: Number(id)}
    //         });
    //         res.json(result);
    //     } catch (error) {
    //         console.error("Error deleting project:", error);
    //         res.status(500).json({ error: "Internal server error" });
    //     }
    // };
}

export const tasksController = new TasksController();