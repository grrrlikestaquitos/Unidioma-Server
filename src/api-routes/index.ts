import TallyRoutes from 'api-routes/tally/tally'
import { BaseRouter } from 'api-routes/base-router/base-router'

class ApiRoutes extends BaseRouter {
    private tallyRoutes: typeof TallyRoutes

    constructor() {
        super()
        this.tallyRoutes = TallyRoutes

        this.linkSubRoutes()
    }

    private linkSubRoutes() {
        this.router.use('/tally', this.tallyRoutes.router)
    }
}

export default new ApiRoutes()