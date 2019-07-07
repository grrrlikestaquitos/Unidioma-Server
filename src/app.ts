import * as express from 'express'
import { Request, Response } from 'express'
import { createServer } from 'http'
import { ApiRoutes } from 'api-routes'
import * as bodyParser from 'body-parser'

export class Application {  
    private app = express()
    private server = createServer(this.app)
    private apiRoutes: ApiRoutes

    constructor() {
        this.apiRoutes = new ApiRoutes()

        this.configureApplication()
    }

    private configureApplication() {
        
        this.bodyParserConfig()
        this.configureApplicationRoutes()
        this.linkSubRoutes()
    }

    private bodyParserConfig() {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))
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
        this.server.listen()
    }
}