import express from "express"
import cors from "cors"
import {config} from "dotenv"
import rolesRoutes from './routes/roles.routes'
import taskStatusesRoutes  from "./routes/taskStatuses.routes"
import authRoutes from './routes/auth.routes'
import projectsRoutes from './routes/projects.routes'
import taskRoutes from './routes/tasks.routes'

// swagger
import swaggerUI from "swagger-ui-express"
import swaggerJSDoc from "swagger-jsdoc"
import { options } from "./swaggerOptions"


config()

const app = express()
app.use(cors())
app.use(express.json())

const specs = swaggerJSDoc(options)

app.use('/api', rolesRoutes);
app.use('/api', taskStatusesRoutes);
app.use('/api', authRoutes);
app.use('/api', projectsRoutes);
app.use('/api', taskRoutes);
app.use('/swagger-ui', swaggerUI.serve, swaggerUI.setup(specs));

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})