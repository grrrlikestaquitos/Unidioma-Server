
exports.up = function(knex, Promise) {
  return knex.schema.createTable('locations', (table) => {
      table.string('name').notNullable()
      table.float('lat').notNullable()
      table.float('lng').notNullable()
      table.integer('bearing').notNullable()
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('locations')
};
