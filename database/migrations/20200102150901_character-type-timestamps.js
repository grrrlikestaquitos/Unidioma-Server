const moment = require('moment')

const languageTypes = [
    { language: 'japanese', types: ['kanji', 'hiragana', 'katakana'] },
    { language: 'chinese', types: ['pinyin'] }
]

exports.up = function(knex) {
  languageTypes.map(async (object) => {
      await knex.schema.table(object.language, (t) => {
        t.string('last_updated').notNullable().defaultTo(moment())
      })
  })
};

exports.down = function(knex) {
    languageTypes.map(async (object) => {
        await knex.schema.table(object.language, (t) => {
            t.dropColumn('last_updated')
        })
    })
};
