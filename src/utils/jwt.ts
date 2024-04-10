import { Users } from "@prisma/client"
import jwt from "jsonwebtoken"

export function generateAccessToken(user:Users) {
    const accessTokenSecret = process.env.JWT_ACCESS_SECRET;
    if (!accessTokenSecret) throw new Error("JWT_ACCESS_SECRET is not defined");
    return jwt.sign({idUser: user.id}, accessTokenSecret, {
        expiresIn: '15m',
    })
}

export function generateRefreshToken(user:Users, jti: string) {
    const refreshTokenSecret = process.env.JWT_REFRESH_SECRET
    if (!refreshTokenSecret) throw new Error("JWT_REFRESH_SECRET is not defined");
    return jwt.sign({
        userId: user.id,
        jti
    }, refreshTokenSecret, {
        expiresIn: '8h',
    })
}

export function generateTokens(user: Users, jti: string) {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user, jti);

    return {
        accessToken,
        refreshToken
    }
}