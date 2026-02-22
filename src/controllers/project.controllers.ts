import type {Request, Response} from "express";
import {projectListSchemas} from "../schemas/project.schemas.js";
import {projectList} from "../services/project.services.js";

export async function getProjects(req: Request, res: Response) {
    const query = projectListSchemas.parse(req.query)
    const data = projectList(query.activeOnly)
    return res.json(data)
}