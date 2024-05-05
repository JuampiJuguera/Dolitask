import {z} from 'zod'

export const signUpSchema = z.object({
    username: z.string({required_error: "Username required"}),
    email: z.string({required_error: "Email required"}).email(), 
    password: z.string({required_error: "Password required"}).min(6),
    name: z.string({required_error: "Name required"}),
    lastName: z.string({required_error: "Last Name required"}),
    photo: z.string({required_error: "Avatar required"}),
});

export const loginSchema = z.object({
    username: z.string({required_error: "Username required"}),
    password: z.string({required_error: "Password required"}).min(6),
});