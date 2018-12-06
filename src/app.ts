import * as express from 'express'
import { Request, Response } from 'express'
import { createServer } from 'http'
import AllRoutes from 'routes'

class Application {
    private app = express()
    private server = createServer(this.app)

    constructor() {
        this.configureApplication()
    }

    private configureApplication() {
        this.linkSubRoutes()
        this.configureApplicationRoutes()
    }

    private configureApplicationRoutes() {
        this.app.get('/', (request: Request, response: Response) => {
            response.status(200).json({ Home: 'Marauders Server' })
        })
    }

    private linkSubRoutes() {
        this.app.use('/api', AllRoutes.routes)
    }

    public listen() {
        this.server.listen(7555, () => {
            console.log('Server running on port 7555')
        })
    }
}

export default new Application()