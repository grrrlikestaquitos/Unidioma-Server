import { addPath } from 'app-module-path'
addPath(__dirname)
import { Application } from 'app'

const app = new Application()
app.listen()