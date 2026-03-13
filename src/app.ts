import express from "express"
import {appRouter} from "./routes/app.routes.js";
import {errorHandler} from "./middleware/error.js";
import cors from 'cors'

export const app = express()


app.use(cors({
    origin: ['http://localhost:5173']
}))

app.use(express.json())

app.use('/api', appRouter)
app.use(errorHandler)