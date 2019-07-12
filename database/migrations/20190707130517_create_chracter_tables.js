
exports.up = async function(knex) {
  const kanjiTable = knex.schema.createTable('kanji', (t) => {
    t.increments('id').primary()
    t.string('character').notNullable()
    t.string('hiragana').notNullable()
    t.string('romaji').notNullable()
    t.string('meaning').notNullable()
    t.string('englishPhrase').notNullable()
    t.string('japanesePhrase').notNullable()
    t.string('romajiPhrase').notNullable()
  })

  return await kanjiTable
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('kanji')
};
