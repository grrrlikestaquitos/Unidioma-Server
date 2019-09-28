import { Request, Response } from 'express'
import { BaseRouter } from 'api-routes/base-router/base-router'
import { CharacterController } from 'api-routes/character-route/character-controller'

export class CharacterRoute extends BaseRouter {
    character: string

    constructor(character: string) {
        super()
        this.character = character

        this.buildCharacterRoute()
    }

    private buildCharacterRoute() {
        this.router.get(`/${this.character}`, async (request: Request, response: Response) => {
            const query = request.query
            const controller = new CharacterController(this.character)

            await controller.getCharacter(query, {
                success: async (data) => {
                    response.status(200).json(data)
                },
                failure: async (error) => {
                    response.status(400).json(error)
                }
            })
        })

        this.router.get(`/${this.character}/range`, async (request: Request, response: Response) => {
            const query = request.query
            const controller = new CharacterController(this.character)

            await controller.handleRangeQuery(query, {
                success: async (data) => {
                    response.status(200).json(data)
                },
                failure: async (error) => {
                    response.status(400).json(error)
                }
            })
        })

        this.router.get(`/${this.character}/all`, async (request: Request, response: Response) => {
            const controller = new CharacterController(this.character)

            console.log('Initiated all request')
            await controller.getAllCharacters({
                success: async (data) => {
                    console.log('Completed all request')
                    response.status(200).json(data)
                }
            })

        })
    }
}