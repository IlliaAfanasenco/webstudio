import {z} from "zod";

export const serviceListSchemas = z.object({
    activeOnly: z.coerce.boolean().optional().default(true)
})