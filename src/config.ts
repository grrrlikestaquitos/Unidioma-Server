import { LanguageType, CharacterType } from 'types'

type Config = { [key in LanguageType]: CharacterType }

export const LanguageConfig: Config = {
    japanese: CharacterType.kanji,
    chinese: CharacterType.pinyin
}