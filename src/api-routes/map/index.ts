import { Request, Response, json } from 'express'
import { Pin, MapResponse } from 'api-routes/map/response'
import { MapController } from 'api-routes/map/controller'
import { BaseRouter } from 'api-routes/base-router';

class MapRoutes extends BaseRouter {
    private controller: MapController

    constructor() {
        super()
        this.controller = new MapController()

        this.configureMapRoutes()
    }
    
    private configureMapRoutes() {
        this.router.get('/map', this.fetchPinLocations)
        this.router.put('/map', this.updatePinLocation)
    }

    private fetchPinLocations = async (request: Request, response: Response) => {
        const data: Array<Pin> = await this.controller.getAllPinLocations()
        const jsonResponse: MapResponse = { data }
        response.status(200).json(jsonResponse)
    }

    private updatePinLocation = async (request: Request, response: Response) => {
        const { ...pin  }: Pin = request.body
        const data = await this.controller.updatePinLocation(pin)
        response.status(200).json(data)
    }
}

export default new MapRoutes()