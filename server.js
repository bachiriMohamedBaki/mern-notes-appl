import dotenv from "dotenv"
import express from "express"

app.use(express.json())
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