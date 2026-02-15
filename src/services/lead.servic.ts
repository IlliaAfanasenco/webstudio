import {prisma} from "../prisma.js";
import type {CreatedLead} from "../types/lead.types.js";



export async function leadCreate(data:CreatedLead){
    return prisma.lead.create({
        data: {
            name: data.name,
            phone: data.phone,
            message: data.message,
            serviceSlug: data.serviceSlug ?? null,
            page: data.page ?? null,
            ip: data.ip ?? null,
            userAgent: data.userAgent ?? null
        },
        select: {
            id: true
        }
    })
}