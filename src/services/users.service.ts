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