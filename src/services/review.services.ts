import {prisma} from "../prisma.js";

export async function reviewList(activeOnly: boolean, limit: number) {
    return prisma.review.findMany({
            where: activeOnly ? {activeOnly: true} : undefined,
            select: {
                id: true,
                name: true,
                text: true,
                rating: true,
                avatarUrl: true,
                isActive: true,
                order: true,
                createdAt: true
            }

        }
    )
}