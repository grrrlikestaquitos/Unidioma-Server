import { addPath } from 'app-module-path'
addPath(__dirname)
import { Application } from 'app'
import { determineCharacterForTheDay } from 'logic/language-character-algo'

const app = new Application()
app.listen()

determineCharacterForTheDay()