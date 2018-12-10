import { Router } from 'express'
import * as bodyParser from 'body-parser'

export class BaseRouter {
    public router = Router()

    constructor() {
        this.configureBodyParser()
    }

    configureBodyParser() {
        this.router.use(bodyParser.json())
        this.router.use(bodyParser.urlencoded({ extended: true }))
    }
}