import {Router} from "express";
import {getFaq} from "../controllers/faq.controllers.js";

export const faqRouter = Router()

faqRouter.get("/", getFaq)