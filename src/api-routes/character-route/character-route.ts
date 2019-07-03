import { Request, Response } from 'express'
import { BaseRouter } from 'api-routes/base-router/base-router'

export class CharacterRoute extends BaseRouter {
    character: String

    constructor(character: String) {
        super()

        this.character = character

        this.buildCharacterRoute()
    }

    private buildCharacterRoute() {
        this.router.get(`/${this.character}`, (request: Request, response: Response) => {
            response.json(`Route is good for ${this.character}`)
        })
    }
}