import { usersService } from "./users.service";
import bcrypt from "bcrypt";
import { generateAccessToken } from "../utils/jwt";


class AuthService {
    public async userRegister (userData: {username: string, email: string, password: string, name: string, lastName: string}) {
        try {

            if (!userData.email || !userData.password || !userData.username || !userData.name || !userData.lastName) return { code: 400, message: 'You must provide Name, lastname, Username, Email and Password' };
            // check if username exists in DB
            const usernameExists = await usersService.findUserByUsername(userData.username);
            if (usernameExists) return { code: 409, message: 'Username already in use' };
            // check if email exists in DB
            const emailExists = await usersService.findUserByEmail(userData.email);
            if (emailExists) return { code: 409, message: 'Email already in use' };
            // hash password
            const user = await usersService.createUserByEmailAndPassword(userData);
            
            
    
            return { code: 200, message: 'User registered successfully', user: user};
        } catch (error) {
            console.error('Error in user registration:', error);
            return {code: 500, message: 'Internal server error'}
        }
    }

    public async login (userData: {username: string, password: string, id: string}) {
        try {
            if (!userData.username || !userData.password) return { code: 400, message: 'You must provide an Username and Password' };
            const existantUser = await usersService.findUserByUsername(userData.username);
            if(!existantUser) return { code: 400, message: 'Invalid login credentials.' }
            const validPassword = await bcrypt.compare(userData.password, existantUser.password);
            if (!validPassword) return { code: 400, message: 'Invalid login credentials.' }

            const token = generateAccessToken(userData.id);

            return { code: 200, message: 'Successful login', user: existantUser, token: token};
        } catch (error) {
            console.error('Error at login:', error);
            return {code: 500, message: 'Internal server error'}
        }
    }
}

export const authService = new AuthService();