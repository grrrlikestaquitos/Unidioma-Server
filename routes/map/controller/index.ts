import * as Knex  from 'knex'
import { Pin } from 'routes/map/response'

export class MapController {
    private knex: Knex

    constructor() {
        this.knex = Knex(require('knexfile'))
    }

    public async getAllPinLocations(): Promise<Pin> {
        const data = await this.knex.table('locations')
        return data
    }
}