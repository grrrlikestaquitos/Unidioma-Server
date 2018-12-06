import { Router } from 'express'
import MapRoutes from 'routes/map'

class AllRoutes {
    public routes = Router()
    private mapRoutes = MapRoutes

    constructor() {
        this.linkSubRoutes()
    }

    private linkSubRoutes() {
        console.log('Linking sub routes')
        this.routes.use(this.mapRoutes.routes)
    }
}

export default new AllRoutes()