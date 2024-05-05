import { NextFunction, Request, Response } from "express";
import { z, ZodError } from "zod";

class FormValidationMiddleware {

    public validateForm = (schema: z.ZodObject<any, any>) => {
        return async (req: Request, res: Response, next: NextFunction) => {
            try {
                const validatedData = schema.parse(req.body);
                req.body = validatedData;
                next();
            } catch (error) {
                if (error instanceof ZodError) {
                    const response = { code: 400, message: error.issues.map((issue) => issue.message) };
                    return res.status(400).json(response);
                }
                return {code: 500, message: 'Internal server error'}
            }
        };
    }
}

export const formValidationMiddleware = new FormValidationMiddleware();



