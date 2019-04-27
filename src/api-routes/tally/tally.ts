import { BaseRouter } from 'api-routes/base-router/base-router'
import HomeRoutes from 'api-routes/tally/home/home'

class TallyRoutes extends BaseRouter {
    private homeRoutes: typeof HomeRoutes

    constructor() {
        super()
        this.homeRoutes = HomeRoutes

        this.linkSubroutes()
    }
    
    private linkSubroutes() {
        this.router.use(this.homeRoutes.router)
    }
}

export default new TallyRoutes()