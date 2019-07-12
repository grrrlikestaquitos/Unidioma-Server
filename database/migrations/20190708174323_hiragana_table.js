
exports.up = async function(knex) {
  const hiraganaTable = knex.schema.createTable('hiragana', (t) => {
    t.increments('id').primary()
    t.string('character').notNullable()
    t.string('romaji').notNullable()
    t.string('type').notNullable()
  })

  return await hiraganaTable
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('hiragana')
};
