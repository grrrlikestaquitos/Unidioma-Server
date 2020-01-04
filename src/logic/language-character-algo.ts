import database from 'database'
import { LanguageType, DateFormat, CharacterType } from 'types'
import * as moment from 'moment'

type Config = { [key in LanguageType]: CharacterType }

// TODO: Create a single source of truth for this config, currently there are multiple
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
                const resetTimestamp = getResetTimestamp()
                const updatedId = await getUpdatedIdForType(type, id)

                await knex.where({ type }).update({ id: updatedId, last_updated: resetTimestamp })
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

const getResetTimestamp = () => {
    return moment().startOf('day').add(5, 'hours').format(DateFormat.detailed)
}

const getUpdatedIdForType = async (type: CharacterType, oldId: number) => {
    const knexType = database(type)
    const count: number = (await knexType.count())[0]['count'] as number - 1

    if (count > oldId) { // There are still more characters to go through, update to next character
        const updatedId = oldId + 1

        console.log(`Id was updated ${updatedId}`)
        return updatedId
    }

    if (oldId === count) { // We've reached the end of characters, more characters need to be added
        console.log(`Id is identical, end met`)   
    } 
}