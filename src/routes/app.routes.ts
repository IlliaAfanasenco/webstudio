import {Router} from "express";
import {serviceRouter} from "./service.routes.js";
import {leadRouter} from "./lead.routes.js";
import {reviewRouter} from "./review.routes.js";
import {projectRouter} from "./project.routes.js";
import {faqRouter} from "./faq.routes.js";

export const appRouter = Router()

appRouter.use("/services", serviceRouter)
appRouter.use("/leads", leadRouter)
appRouter.use("/review", reviewRouter)
appRouter.use("/project", projectRouter)
appRouter.use("/faq", faqRouter)
