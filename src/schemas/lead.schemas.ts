import {z} from "zod"

export const createdLead = z.object({
    name: z.string().min(5),
    email: z.string().email(),
    phone: z.string().min(5),
    message: z.string().min(4),
    serviceSlug: z.string().optional(),
    page: z.string().optional()

})

