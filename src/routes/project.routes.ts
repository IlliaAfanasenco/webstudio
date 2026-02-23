import {Router} from "express";
import {getProject, getProjects} from "../controllers/project.controllers.js";

export const projectRouter = Router()

projectRouter.get("/", getProjects)
projectRouter.get("/:slug", getProject)