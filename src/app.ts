import express from "express"
import {appRouter} from "./routes/app.routes.js";
export const app = exports()

app.use(express.json())

app.use('/api', appRouter)