import dotenv from "dotenv"
import express from "express"
import morgan from "morgan"
app.use(express.json())
app.use(morgan("dev"))
dotenv.config(
    {
        path: "./config/config.env",
    }
)

const app = express()
app; get("/", (req, res) => {
    res.send("hi")
})
app.listen(5000, () => {
    console.log("HELLO")
})