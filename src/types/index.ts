export enum LanguageType {
    japanese = 'japanese',
    chinese = 'chinese'
}

export enum CharacterType {
    kanji = 'kanji',
    hiragana = 'hiragana',
    katakana = 'katakana',
    pinyin = 'pinyin'
}

export enum DateFormat {
    regular = 'D-M-YYYY hh:mm', // 1-1-2020 2:20
    detailed = 'dd MMM DD YYYY HH:mm:ss' // Thu Jan 02 2020 19:30:56 GMT-0800
}

export const oneSecond = 1000
export const oneMinute = oneSecond * 60
export const oneHour = oneMinute * 60
export const fiveHours = oneHour * 5