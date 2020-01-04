import { addPath } from 'app-module-path'
addPath(__dirname)
import { Application } from 'app'
import { determineCharacterForTheDay } from 'logic/language-character-algo'
import { fiveHours } from 'types'

const app = new Application()
app.listen()

setInterval(determineCharacterForTheDay, fiveHours)
