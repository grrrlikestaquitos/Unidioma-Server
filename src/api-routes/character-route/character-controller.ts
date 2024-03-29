import { CharacterStore } from 'api-routes/character-route/character-store'
import { ResponseError, Completion } from 'api-routes/api-interfaces/api-interface'
import { CharacterType } from 'types'

export class CharacterController {
    store: CharacterStore

    constructor(character: CharacterType) {
        this.store = new CharacterStore(character)
    }

    public async getAllCharacters(completion: Completion) {
        const characters = await this.store.getAllCharacters()
        completion.success({ data: characters })
    }

    public async getCharacter(query: any, completion: Completion) {
        const { id } = query

        if (id) {
            const character = await this.store.getCharacter(id)
            completion.success({ data: character })
        } else {
            const error = ResponseError('Missing query parameter: [id: int]')
            completion.failure(error)
        }
    }

    public async handleRangeQuery(query: any, completion: Completion) {
        const { isValid, message } = this.validateRangeQuery(query)

        if (!isValid) {
            const error = ResponseError(message)
            completion.failure(error)
        } else {
            const { from, to } = query
            const characters = await this.store.getCharactersForRange(from, to)
            completion.success({ data: characters })
        }
    }

    private validateRangeQuery(query: any) {
        const { from, to } = query

        const response = {
            isValid: false,
            message: ''
        }

        if (!from || !to) {
            response.isValid = false
            response.message = 'Missing query parameter: [from: int & to: int]'
            return response
        } else {
            response.isValid = true
            return response
        }
    }
}