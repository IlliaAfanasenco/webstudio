import {Router} from "express";
import {getService} from "../controllers/service.controllers.js";

export const serviceRouter = Router()

serviceRouter.get("/", getService)