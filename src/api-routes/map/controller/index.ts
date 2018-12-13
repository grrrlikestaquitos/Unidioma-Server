import { Pin } from 'api-routes/map/response'
import { BaseController } from 'api-routes/base-controller';

export class MapController extends BaseController {
    
    constructor() {
        super()
    }

    public async getAllPinLocations(): Promise<Array<Pin>> {
        const data = await this.knex.table('locations')
        return data
    }

    public async updatePinLocation(pin: Pin) {
        const { name, ...pinPosition } = pin
        return this.knex.table('locations').where({ name: name }).update(pinPosition)
    }
}