import {ZodError} from "zod";
import type {Request, Response, NextFunction} from "express";

export function errorHandler(error: unknown, _req: Request, res:Response, _next: NextFunction){
    if(error instanceof ZodError) {
       return res.status(400).json({
           error: 'ValidError',
           details: error.issues.map((i) => ({
               path: i.path.join("."),
               message: i.message
           }))
       })
    }

    console.error(error)

    return res.status(500).json({
        error:'Serv err'
    })
}