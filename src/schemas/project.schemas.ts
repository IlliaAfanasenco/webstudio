import {z} from "zod"

export const projectListSchemas = z.object({
    activeOnly: z.coerce.boolean().optional().default(true)
})

export const projectSlugSchemas = z.object({
    slug: z.string().min(1)
})