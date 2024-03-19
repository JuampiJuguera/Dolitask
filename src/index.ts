import express from "express"
import cors from "cors"
import {config} from "dotenv"

config()

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})