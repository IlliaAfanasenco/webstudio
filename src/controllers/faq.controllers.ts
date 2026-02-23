import type {Request, Response} from "express";
import {faqSchemas} from "../schemas/faq.schemas.js";
import {faqServices} from "../services/faq.services.js";

export async function getFaq(req: Request, res: Response){
    const query = faqSchemas.parse(req.query)
    const data = await faqServices(query.activeOnly)
    return res.json(data)
}