import {z} from "zod";

export const serviceList = z.object({
    activeOnly: z.coerce.boolean().optional().default(true)
})