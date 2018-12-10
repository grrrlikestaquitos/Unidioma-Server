import MapRoutes from 'api-routes/map'
import { BaseRouter } from 'api-routes/base-router';

class AllRoutes extends BaseRouter {
    private mapRoutes = MapRoutes

    constructor() {
        super()

        this.linkSubRoutes()
    }

    private linkSubRoutes() {
        this.router.use(this.mapRoutes.router)
    }
}

export default new AllRoutes()