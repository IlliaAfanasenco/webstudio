import {z} from "zod"

export  const reviewListSchemas = z.object({
    activeOnly: z.coerce.boolean().optional().default(true),
    limit : z.coerce.number().int().min(1).max(20).optional().default(10)
})