const dev  = process.env.NODE_ENV || 'development'
const db   = require('../knexfile')[dev]
const knex = require('knex')(db)

export default knex