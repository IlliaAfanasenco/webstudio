import {prisma} from "../prisma.js";

export async function faqServices(activeOnly: boolean) {
    return prisma.faq.findMany({
        where: activeOnly ? {isActive: true} : undefined,
        select: {
            id: true,
            question: true,
            answer: true,
            isActive: true,
            order: true,
            createdAt: true,
            updatedAt: true
        }
    })
}