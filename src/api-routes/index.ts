import { BaseRouter } from 'api-routes/base-router/base-router'
import { CharacterRoute } from 'api-routes/character-route/character-route'

enum CharacterType {
    kanji = 'kanji',
    hiragana = 'hiragana',
    katakana = 'katakana',
    pinyin = 'pinyin'
}

export class ApiRoutes extends BaseRouter {
    constructor() {
        super()

        this.buildCharacterRoutes()
    }

    private buildCharacterRoutes() {
        Object.keys(CharacterType).map((type) => {
            this.router.use(new CharacterRoute(type).router)
        })
    }
}