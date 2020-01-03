import database from 'database'
import { LanguageType, CharacterType } from 'types'

export class LanguageStore {
    language: LanguageType
    knex: any

    constructor(language: LanguageType) {
        this.language = language
        this.knex = database(language)
    }

    public getCharacterInfo = async (type: CharacterType) => {
        const typeInfo = await this.knex.where({ type })
        return typeInfo
    }
}