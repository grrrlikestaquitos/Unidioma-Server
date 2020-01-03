import database from 'database'
import { CharacterType } from 'types'

export class CharacterStore {
    character: CharacterType
    knex: any

    constructor(character: CharacterType) {
        this.character = character
        this.knex = database(character)
    }

    public getCharactersForRange = async (from: string, to: string) => {
        const range = [parseInt(from), parseInt(to)]
        const characters = await this.knex.select('*').whereBetween('id', range)
        return characters
    }

    public getAllCharacters = async () => {
        const characters = await this.knex.select('*')
        return characters
    }

    public getCharacter = async (id: number) => {
        const character = await this.knex.where({ id })
        return character
    }
}