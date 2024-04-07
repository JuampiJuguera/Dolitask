import { prisma } from "../utils/prisma";
import bcrypt from "bcrypt";

class AuthService {
    static saltRounds = 10;

    public async userRegister (userData: {username: string, email: string, password: string}) {
        // fix aca solo funciona si los 2 son unicos
        const checkUser = await prisma.users.findUnique({
            where: {
                username: userData.username,
                email: userData.email,
            }
        })
        if (checkUser) {
            return false // dto de error usuario ya existe
        }
        const salt = bcrypt.genSaltSync(AuthService.saltRounds);
        const hashedPassword = bcrypt.hashSync(userData.password, salt);

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

        return true;
    }
}

export const authService = new AuthService();