import {z} from 'zod'

export const signupSchema = z.object({
    username: z.string(),
    email: z.string().email(), 
    password: z.string().min(6),
    name: z.string(),
    lastName: z.string(),
    photo: z.string(),
})