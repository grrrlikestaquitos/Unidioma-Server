import { Request, Response } from 'express'
import { BaseRouter } from 'api-routes/base-router/base-router'
import { Header } from './components/header'
import { Body } from './components/body'
import { View } from 'terram'

class HomeRoutes extends BaseRouter {

    constructor() {
        super()
        this.configureHomeRoutes()
    }

    private configureHomeRoutes() {
        this.router.get('/home', (request: Request, response: Response) => {
            console.log(`Incoming request`)
            const responseView = View({ props: { style: { flex: 1 }}, children: [Header, Body] })
            response.status(200).json(responseView)
        })
    }
}

export default new HomeRoutes()