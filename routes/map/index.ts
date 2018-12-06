import { Router, Request, Response } from 'express'

class MapRoutes {
    public routes = Router()

    constructor() {
        this.configureMapRoutes()
    }
    
    private configureMapRoutes() {
        this.routes.get('/map', (request: Request, response: Response) => {
            response.status(200).json({ data: 'Successful map route implementation' })
        })
    }
}

export default new MapRoutes()