const knexfile = require('../../knexfile')
import * as knex from 'knex'

const env = process.env.NODE_ENV || 'development'
const config = knexfile[env]
export default knex(config)