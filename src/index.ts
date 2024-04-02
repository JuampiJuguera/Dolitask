import express from "express"
import cors from "cors"
import {config} from "dotenv"
import rolesRoutes from './routes/roles.routes'
import taskStatusesRoutes  from "./routes/taskStatuses.routes"

config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', rolesRoutes);
app.use('/api', taskStatusesRoutes);

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})