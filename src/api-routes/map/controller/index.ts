import * as Knex  from 'knex'
import { Pin } from 'api-routes/map/response'
import knexfile from 'resource/knexfile'

export class MapController {
    private knex: Knex

    constructor() {
        this.knex = Knex(knexfile)
    }

    public async getAllPinLocations(): Promise<Pin> {
        const data = await this.knex.table('locations')
        return data
    }

    public async updatePinLocation(pin: Pin) {
        const { name, ...pinPosition } = pin
        return this.knex.table('locations').where({ name: name }).update(pinPosition)
    }
}