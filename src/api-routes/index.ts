import MapRoutes from 'api-routes/map'
import { BaseRouter } from 'api-routes/base-router';

class ApiRoutes extends BaseRouter {
    private mapRoutes: typeof MapRoutes

    constructor() {
        super()
        this.mapRoutes = MapRoutes

        this.linkSubRoutes()
    }

    private linkSubRoutes() {
        this.router.use(this.mapRoutes.router)
    }
}

export default new ApiRoutes()