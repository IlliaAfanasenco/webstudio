export type CreatedLead = {
    name: string
    email: string
    phone: string
    message: string
    serviceSlug?: string | null
    page?: string | null
    ip?: string | null
    userAgent?: string | null
}