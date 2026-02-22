import {z} from "zod"

export const projectListSchemas = z.object({
    activeOnly: z.coerce.boolean().optional().default(true)
})