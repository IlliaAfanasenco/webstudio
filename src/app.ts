import express from "express"
import {appRouter} from "./routes/app.routes.js";
import {errorHandler} from "./middleware/error.js";
export const app = exports()

app.use(express.json())

app.use('/api', appRouter)
app.use(errorHandler)