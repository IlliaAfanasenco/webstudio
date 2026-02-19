import {Router} from "express";
import {getReview} from "../controllers/review.controllers.js";

export const reviewRouter = Router()

reviewRouter.get("/", getReview)