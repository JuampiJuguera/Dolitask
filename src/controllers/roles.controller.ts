import { Request, Response } from 'express';
import { prisma } from "../utils/prisma";

class RolesController {
    // Constructor

    // Methods
    public getRoles = async (_req: Request, res: Response) => {
        try {
            const roles = await prisma.roles.findMany();
            res.json(roles);
        } catch (error) {
            console.error("Error retrieving roles:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    };

    public postRole = async (req: Request, res: Response) => {
        try {
            const {name, description} = req.body;
            const result = await prisma.roles.create({
                data: {
                    name, description
                }
            });
            res.json(result);
        } catch (error) {
            console.error("Error creating role:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    };

    
}

export const rolesController = new RolesController();