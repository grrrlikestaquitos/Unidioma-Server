import { Router } from 'express'

export class BaseRouter {
    public router: Router

    constructor() {
        this.router = Router()
    }
}