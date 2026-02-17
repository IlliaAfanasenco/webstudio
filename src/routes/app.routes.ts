import {Router} from "express";
import {serviceRouter} from "./service.routes.js";
import {leadRouter} from "./lead.routes.js";

export const appRouter = Router()

appRouter.use("/services", serviceRouter)
appRouter.use("/leads", leadRouter)