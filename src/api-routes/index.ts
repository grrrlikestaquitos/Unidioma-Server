import { Request, Response } from 'express'
import { TallyRoutes } from 'api-routes/tally/tally'
import { BaseRouter } from 'api-routes/base-router/base-router'

export class ApiRoutes extends BaseRouter {
    // private tallyRoutes: TallyRoutes

    constructor() {
        super()
        // this.tallyRoutes = new TallyRoutes()

        this.linkSubRoutes()
    }

    private linkSubRoutes() {
        // this.router.use('/tally', this.tallyRoutes.router)

        this.router.post('/', (request: Request, response: Response) => {
            console.log(`${JSON.stringify(request.body)}`)
            response.json('good')
        })
    }
}