import rateLimit from "express-rate-limit";

export const leadLimit = rateLimit({
  windowMs: 2 * 60 * 1000,
    limit: 10,
    standardHeaders: true,
    legacyHeaders: false,
})