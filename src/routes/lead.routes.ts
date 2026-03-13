import {Router} from "express";
import {postLead} from "../controllers/lead.controllers.js";
import {leadLimit} from "../middleware/lead-limit.js";

export const leadRouter = Router()


leadRouter.post("/", leadLimit, postLead)