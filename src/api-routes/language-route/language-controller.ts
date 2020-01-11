import { LanguageStore } from 'api-routes/language-route/language-store'
import { Completion } from 'api-routes/api-interfaces/api-interface'
import { LanguageType, CharacterType } from 'types'
import { CharacterStore } from 'api-routes/character-route/character-store'
import { LanguageConfig } from 'config'

export class LanguageController {
    language: LanguageType
    store: LanguageStore

    constructor(language: LanguageType) {
        this.language = language
        this.store = new LanguageStore(language)
    }

    public async getCharacterOfTheDay(completion: Completion) {
        const characterType = this.getCharacterTypeForLanguage()
        const [characterInfo] = await this.store.getCharacterInfo(characterType)
        const { type, id } = characterInfo
        const characterStore = new CharacterStore(characterType)
        const character = (await characterStore.getCharacter(id))[0]

        completion.success({ data: { character, type } })
    }

    private getCharacterTypeForLanguage(): CharacterType {
        return LanguageConfig[this.language];
    }
}