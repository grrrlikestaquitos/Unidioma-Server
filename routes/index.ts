import { Router } from 'express'
import MapRoutes from 'routes/map'

class AllRoutes {
    public routes: Router
    private mapRoutes = MapRoutes

    constructor() {
        this.routes = Router()

        this.linkSubRoutes()
    }

    private linkSubRoutes() {
        this.routes.use(this.mapRoutes.routes)
    }
}

export default new AllRoutes()