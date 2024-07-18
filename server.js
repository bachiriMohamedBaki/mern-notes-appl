import dotenv from "dotenv"
import express from "express"
import morgan from "morgan"
import notesRoutes from "./routes/notes.js"
import { connectDB } from "./config/db.js"

const app = express()
app.use(express.json())
app.use(morgan("dev"))
dotenv.config(
    {
        path: "./config/config.env",
    }
)

app.use("/api/v1/notes", notesRoutes)

app.listen(5000, () => {
    try {
        connectDB()
        console.log("connectDB")
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1)
    }
})