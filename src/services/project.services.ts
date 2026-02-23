import {prisma} from "../prisma.js";

export async function projectList(activeOnly: boolean) {
    return prisma.project.findMany({
        where: activeOnly ? {isActive: true} : undefined,
        select: {
            id: true,
            title: true,
            short: true,
            slug: true,
            url: true,
            previewUrl: true,
            task: true,
            realized: true,
            technology: true,
            result: true,
            isActive: true,
            order: true,
            createdAt: true,
        }
    })
}

export async function projectBySlug(slug:string){
    return prisma.project.findMany({
        where: {slug},
        select: {
            id: true,
            title: true,
            short: true,
            slug: true,
            url: true,
            previewUrl: true,
            task: true,
            realized: true,
            technology: true,
            result: true,
            isActive: true,
            order: true,
            createdAt: true,
        }
    })
}