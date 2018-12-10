import * as express from 'express'
import { Request, Response } from 'express'
import { createServer } from 'http'
import AllRoutes from 'api-routes'

class Application {
    private app = express()
    private server = createServer(this.app)
    private allRoutes = AllRoutes

    constructor() {
        this.configureApplication()
    }

    private configureApplication() {
        this.configureApplicationRoutes()
        this.linkSubRoutes()
    }

    private configureApplicationRoutes() {
        this.app.get('/', (request: Request, response: Response) => {
            response.status(200).json({ Home: 'Marauders Server' })
        })
    }

    private linkSubRoutes() {
        this.app.use('/api', this.allRoutes.router)
    }

    public listen() {
        this.server.listen(7555, () => {
            console.log('Server running on port 7555')
        })
    }
}

export default new Application()