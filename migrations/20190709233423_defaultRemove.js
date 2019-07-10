
exports.up = async function(knex) {
    await knex.schema.raw('ALTER TABLE hiragana ALTER COLUMN id DROP DEFAULT')
    await knex.schema.raw('ALTER TABLE katakana ALTER COLUMN id DROP DEFAULT')
    await knex.schema.raw('ALTER TABLE kanji ALTER COLUMN id DROP DEFAULT')
};

exports.down = function(knex) {
  
};
