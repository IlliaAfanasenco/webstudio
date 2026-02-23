import {prisma} from "../prisma.js";


export async function servicesList(activeOnly: boolean) {
    return prisma.service.findMany({
        where: activeOnly ? {isActive: true} : undefined,
        select: {
            id: true,
            slug: true,
            title: true,
            short: true,
            includes: true,
            timeline: true,
            priceFrom: true,
            isActive: true,

            order: true,
            createdAt: true,
            updatedAt: true
        }

    })
}