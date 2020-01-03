import database from 'database'
import { LanguageType, DateFormat, CharacterType } from 'types'
import * as moment from 'moment'

type Config = { [key in LanguageType]: CharacterType }

const LanguageConfig: Config = {
    japanese: CharacterType.kanji,
    chinese: CharacterType.pinyin
}

export const determineCharacterForTheDay = () => {
    
    Object.entries(LanguageConfig).map(async ([language, selectedType]) => {
        const knex = database(language)
        const typeInfoArray = await knex.where({ type: selectedType }).select('type', 'id', 'last_updated')

        typeInfoArray.map(async (typeInfo) => {
            const { type, id, last_updated } = typeInfo
            const didExpire = checkIfTimestampExpired(last_updated)

            if (didExpire) {
                const resetTimestamp = moment().startOf('day').add(5, 'hours').format(DateFormat.detailed)
                knex.where({ type }).update({ last_updated: resetTimestamp })
            }

        })
    })
}

const checkIfTimestampExpired = (timestamp: string) => {
    const momentTimestamp = moment(timestamp, DateFormat.detailed)
    const differenceInHours = moment().diff(momentTimestamp, 'hours')
    const differenceGreaterThan24Hours = differenceInHours >= 24

    return differenceGreaterThan24Hours
}