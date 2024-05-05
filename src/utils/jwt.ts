import jwt from "jsonwebtoken"

export function generateAccessToken(id: number) {
    const accessTokenSecret = process.env.JWT_ACCESS_SECRET;
    if (!accessTokenSecret) throw new Error("JWT_ACCESS_SECRET is not defined");
    return jwt.sign({idUser: id}, accessTokenSecret, {
        expiresIn: '15m',
    })
}