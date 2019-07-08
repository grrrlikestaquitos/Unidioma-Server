import database from 'database'

export class CharacterStore {
    character: string

    constructor(character: string) {
        this.character = character
    }

    public getAllCharacters = async () => {
        const characters = await database(this.character).select('*')
        return characters
    }
}