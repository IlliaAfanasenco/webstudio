import type {Request, Response} from "express";
import {projectListSchemas, projectSlugSchemas} from "../schemas/project.schemas.js";
import {projectBySlug, projectList} from "../services/project.services.js";

export async function getProjects(req: Request, res: Response) {
    const query = projectListSchemas.parse(req.query)
    const data =await projectList(query.activeOnly)
    return res.json(data)
}

export async function getProject(req:Request, res: Response){
    const params = projectSlugSchemas.parse(req.params)
    const data = await projectBySlug(params.slug)

    if(!data || !data.isActive) {
        return res.status(404).json({message: 'project not found'})
    }
    return res.json(data)
}