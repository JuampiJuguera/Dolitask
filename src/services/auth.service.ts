import { hashToken } from "../utils/hashToken";
import { prisma } from "../utils/prisma";
import { usersService } from "./users.service";
import { uuid } from 'uuidv4';
import bcrypt from "bcrypt";
import { generateTokens } from "../utils/jwt";

class AuthService {
    
    private addRefreshTokenToWhiteList(jti: string, refreshToken: string, idUser: number) {
        return prisma.refreshToken.create({
            data: {
                id: jti,
                hashedToken: hashToken(refreshToken),
                idUser
            }
        })
    }

    private findRefreshTokenById(id: string) {
        return prisma.refreshToken.findUnique({
            where: {
                id,
            }
        })
    }

    private deleteRefreshToken(id: string) {
        return prisma.refreshToken.update({
            where: {
                id,
            },
            data: {
                revoked: true
            }
        })
    }

    private revokeTokens(idUser: number) {
        return prisma.refreshToken.updateMany({
            where: {
                idUser
            },
            data: {
                revoked: true
            }
        })
    }

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
            const jti = uuid();
            const {accessToken, refreshToken} = generateTokens(user, jti);
            await this.addRefreshTokenToWhiteList(jti, refreshToken, user.id);
    
            return { code: 200, message: 'User registered successfully', user: user, accessToken: accessToken, refreshToken: refreshToken};
        } catch (error) {
            console.error('Error in user registration:', error);
            return {code: 500, message: 'Internal server error'}
        }
    }

    public async login (userData: {username: string, password: string}) {
        try {
            if (!userData.username || !userData.password) return { code: 400, message: 'You must provide an Username and Password' };
            const existantUser = await usersService.findUserByUsername(userData.username);
            if(!existantUser) return { code: 400, message: 'Invalid login credentials.' }
            const validPassword = await bcrypt.compare(userData.password, existantUser.password);
            if (!validPassword) return { code: 400, message: 'Invalid login credentials.' }

            const jti = uuid();
            const {accessToken, refreshToken} = generateTokens(existantUser, jti);
            await this.addRefreshTokenToWhiteList(jti, refreshToken, existantUser.id)

            return { code: 200, message: 'Successful login', user: existantUser, accessToken: accessToken, refreshToken: refreshToken};
        } catch (error) {
            console.error('Error at login:', error);
            return {code: 500, message: 'Internal server error'}
        }
    }
}

export const authService = new AuthService();