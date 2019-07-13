import { CharacterStore } from 'api-routes/character-route/character-store'

interface Completion {
    success: (data: object) => void
    failure?: (error: HirakanaError) => void
}

interface HirakanaError {
    error: { message: string }
}

const ResponseError = (message: string): HirakanaError => {
    return { error: { message } }
}

export class CharacterController {
    store: CharacterStore

    constructor(character: string) {
        this.store = new CharacterStore(character)
    }

    public async getAllCharacters(completion: Completion) {
        const characters = await this.store.getAllCharacters()
        completion.success({ data: characters })
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