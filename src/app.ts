import * as express from 'express'
import { Request, Response } from 'express'
import { createServer } from 'http'
import ApiRoutes from 'api-routes'

class Application {
    private app = express()
    private server = createServer(this.app)
    private apiRoutes: typeof ApiRoutes

    constructor() {
        this.apiRoutes = ApiRoutes

        this.configureApplication()
    }

    private configureApplication() {
        this.configureApplicationRoutes()
        this.linkSubRoutes()
    }

    private configureApplicationRoutes() {
        this.app.get('/', (request: Request, response: Response) => {
            response.status(200).json({ Root: 'Root of the project' })
        })
    }

    private linkSubRoutes() {
        this.app.use('/api', this.apiRoutes.router)
    }

    public listen() {
        this.server.listen(7555, () => {
            console.log('Server running on port 7555')
        })
    }
}

export default new Application()