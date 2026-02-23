import {z} from "zod"

export const faqSchemas = z.object({
    activeOnly: z.coerce.boolean().optional().default(true)
})