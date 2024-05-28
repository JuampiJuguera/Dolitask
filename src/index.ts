import express from "express"
import cors from "cors"
import {config} from "dotenv"
import rolesRoutes from './routes/roles.routes'
import taskStatusesRoutes  from "./routes/taskStatuses.routes"
import authRoutes from './routes/auth.routes'
import projectsRoutes from './routes/projects.routes'

config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', rolesRoutes);
app.use('/api', taskStatusesRoutes);
app.use('/api', authRoutes);
app.use('/api', projectsRoutes)

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})