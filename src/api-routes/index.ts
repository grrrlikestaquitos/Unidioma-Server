import { Request, Response } from 'express'
import { BaseRouter } from 'api-routes/base-router/base-router'
import { CharacterRoute } from './character-route/character-route';

enum CharacterType {
    kanji = 'kanji',
    hiragana = 'hiragana',
    katakana = 'katakana',
    chinese = 'chinese'
}

export class ApiRoutes extends BaseRouter {
    constructor() {
        super()

        this.buildCharacterRoutes()
    }

    private buildCharacterRoutes() {
        Object.keys(CharacterType).map((type) => {
            console.log(`Create character route for ${type}`)
            this.router.use(new CharacterRoute(type).router)
        })
    }
}