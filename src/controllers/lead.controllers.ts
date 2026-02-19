import {createdLead} from "../schemas/lead.schemas.js";
import {leadCreate} from "../services/lead.service.js";
import type {Request, Response} from "express";

export async function postLead(req: Request , res: Response) {
    const body = createdLead.parse(req.body);

    const lead = await leadCreate({
        name:body.name,
        email:body.email,
        phone:body.phone,
        message:body.message,
        serviceSlug:body.serviceSlug ?? null,
        page:body.page ?? null,
        ip: req.ip ?? null,
        userAgent: req.get("user-agent" ) ?? null
    });

    return res.status(201).json({ id: lead.id })
}