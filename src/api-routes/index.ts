import { BaseRouter } from 'api-routes/base-router/base-router'
import { CharacterRoute } from 'api-routes/character-route/character-route'
import { LanguageRoute } from 'api-routes/language-route/language-route'
import { LanguageType, CharacterType } from 'types'

export class ApiRoutes extends BaseRouter {
    constructor() {
        super()

        this.buildCharacterRoutes()
        this.buildLanguageRoutes()
    }

    private buildCharacterRoutes() {
        Object.keys(CharacterType).map((type) => {
            this.router.use(new CharacterRoute(type as CharacterType).router)
        })
    }

    private buildLanguageRoutes() {
        Object.keys(LanguageType).map((type) => {
            this.router.use(new LanguageRoute(type as LanguageType).router)
        })
    }
}