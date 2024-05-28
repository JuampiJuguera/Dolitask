import { prisma } from "../utils/prisma";
import bcrypt from "bcrypt";

class UsersService {

    public findUserByEmail (email: string) 
    {
        return prisma.users.findUnique({
            where: {
                email,
            }
        })
    }

    public findUserByUsername (username: string) 
    {
        return prisma.users.findUnique({
            where: {
                username,
            }
        })
    }

    public findUserById (id: number) {
        return prisma.users.findUnique({
            where: {
                id,
            }
        })
    }

    public async getUserRoles(id: number) {
        const userRoles = await prisma.user_roles.findMany({
            where: {
                id,
            },
            include: {
                role: true,
            },
        });
        return userRoles.map((ur) => ur.role.name); 
    }

    public async getUserPermissions(id: number) {
        const userRoles = await prisma.user_roles.findMany({
            where: {
                id,
            },
            include: {
                role: {
                    include: {
                        rolePermission: {
                            include: {
                                permission: true
                            }
                        }
                    }
                }
            },
        });

        if (!userRoles) throw new Error("Error getting roles or permissions"); 
        // const roles = userRoles.map((ur) => ur.role); 
        const permissions = userRoles.flatMap(userRole => 
            userRole.role.rolePermission.map(rp => rp.permission.name)
        );
        return permissions
    }

    public createUserByEmailAndPassword(userData: {username: string, email: string, password: string, name: string, lastName: string}) {
        
        const hashedPassword = bcrypt.hashSync(userData.password, 12);

        return prisma.users.create({
            data: {
                username: userData.username,
                email: userData.email, 
                password: hashedPassword,
                name: userData.name,
                lastName: userData.lastName,
                photo: "",
            }
        })
    } 
}

export const usersService = new UsersService();