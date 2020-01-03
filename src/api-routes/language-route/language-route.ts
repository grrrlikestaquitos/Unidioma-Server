import { Request, Response } from 'express'
import { BaseRouter } from 'api-routes/base-router/base-router'
import { LanguageController } from 'api-routes/language-route/language-controller'
import { LanguageType } from 'types'

export class LanguageRoute extends BaseRouter {
    language: LanguageType

    constructor(language: LanguageType) {
        super()
        this.language = language

        this.buildLanguageRoute()
    }

    private buildLanguageRoute() {
        this.router.get(`/${this.language}`, async (request: Request, response: Response) => {
            const controller = new LanguageController(this.language)

            await controller.getCharacterOfTheDay({
                success: async (data) => {
                    response.status(200).json(data)
                }
            })
        })
    }
}