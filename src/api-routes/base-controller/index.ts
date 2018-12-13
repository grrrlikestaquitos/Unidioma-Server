import * as Knex from 'knex'
import knexfile from 'resource/knexfile'

export class BaseController {
    protected knex: Knex

    constructor() {
        this.knex = Knex(knexfile)
    }
}