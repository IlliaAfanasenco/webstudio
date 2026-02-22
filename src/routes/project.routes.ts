import {Router} from "express";
import {getProjects} from "../controllers/project.controllers.js";

export const projectRouter = Router()

projectRouter.get("/", getProjects)