import type {Request, Response} from "express";
import {reviewListSchemas} from "../schemas/review.schemas.js";
import {reviewList} from "../services/review.services.js";

export async function getReview(req: Request, res: Response) {
    const query = reviewListSchemas.parse(req.query)
    const data = reviewList(query.activeOnly, query.limit)
    return res.json(data)
}