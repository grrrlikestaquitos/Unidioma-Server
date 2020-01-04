const languageTypes = [
    { language: 'japanese', types: ['kanji', 'hiragana', 'katakana'] },
    { language: 'chinese', types: ['pinyin'] }
]

exports.up = async function(knex) {
  languageTypes.map(async (object) => {
    await knex.schema.createTable(object.language, (t) => {
        t.string('type').notNullable()
        t.integer('id').notNullable()
    })

    object.types.map(async (type) => {
        const initialValues = { type, id: 0 }
        await knex(object.language).insert(initialValues)
    })
  })
};

exports.down = async function(knex) {
  languageTypes.map(async (object) => {
      await knex.schema.dropTableIfExists(object.language)
  })
};
