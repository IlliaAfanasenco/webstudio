import {Router} from "express";
import {postLead} from "../controllers/lead.controllers.js";

export const leadRouter = Router()



leadRouter.post("/", postLead)