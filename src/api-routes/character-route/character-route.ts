import { Request, Response } from 'express'
import { BaseRouter } from 'api-routes/base-router/base-router'
import { CharacterStore } from './character-store';

export class CharacterRoute extends BaseRouter {
    character: string
    store: CharacterStore

    constructor(character: string) {
        super()

        this.character = character
        this.store = new CharacterStore(character)

        this.buildCharacterRoute()
    }

    private buildCharacterRoute() {
        this.router.get(`/${this.character}`, async (request: Request, response: Response) => {
            const characters = await this.store.getAllCharacters()
            response.json(characters)
        })
    }
}