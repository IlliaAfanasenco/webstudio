import type {Request, Response} from "express";
import {serviceListSchemas} from "../schemas/service.schemas.js";
import {servicesList} from "../services/services.services.js";

export async function getService (req: Request, res: Response){
    const query = serviceListSchemas.parse(req.query)
    const data = servicesList(query.activeOnly)
    return res.json(data)
}