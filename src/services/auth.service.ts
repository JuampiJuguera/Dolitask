import { prisma } from "../utils/prisma";
import bcrypt from "bcrypt";

class AuthService {
    static saltRounds = 10;

    public async userRegister (userData: {username: string, email: string, password: string}) {
        try {
            // check if username exists in DB
            const usernameExists = await prisma.users.findUnique({where: {username: userData.username}})
            if (usernameExists) { return { code: 409, message: 'Username already in use' }}
            // check if email exists in DB
            const emailExists = await prisma.users.findUnique({where: {email: userData.email}})
            if (emailExists) { return { code: 409, message: 'Email already in use' }}
            // hash password
            const salt = bcrypt.genSaltSync(AuthService.saltRounds);
            const hashedPassword = bcrypt.hashSync(userData.password, salt);
            // create user in DB
            const user = await prisma.users.create({
                data: {
                    username: userData.username,
                    email: userData.email, 
                    password: hashedPassword,
                    name: "DefaultName",
                    lastName: "DefaultLastName",
                    photo: '',
                }
            })
    
            return { code: 200, message: 'User registered successfully', user: user}
        }catch (error) {
            console.error('Error in user registration:', error);
            return {code: 500, message: 'Internal server error'}
        }
    }

    public async login (userData: {username: string, password: string}) {

    }
}

export const authService = new AuthService();