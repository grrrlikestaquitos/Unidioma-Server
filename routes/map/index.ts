import { Router, Request, Response } from 'express'
import { Pin } from 'routes/map/response'
import { MapController } from 'routes/map/controller'

class MapRoutes {
    public routes: Router
    private controller: MapController

    constructor() {
        this.routes = Router()
        this.controller = new MapController()

        this.configureMapRoutes()
    }
    
    private configureMapRoutes() {
        this.routes.get('/map', this.fetchPinLocations)
    }

    private fetchPinLocations = async (request: Request, response: Response) => {
        const data: Pin = await this.controller.getAllPinLocations()
        
        console.log(`Endpoint to fetch pin locations was called ${data}`)
        response.status(200).json(data)

        // const data: MapResponse = {
        //     viewType: MapPinTypes.people,
        //     data: [
        //         { name: 'Andrei V', lat: 47.695258, lng: -122.373937, bearing: 270 }
        //     ]
        // }
    }
}

export default new MapRoutes()