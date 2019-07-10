
exports.up = async function(knex) {
	await knex.schema.alterTable('hiragana', (t) => {
		t.dropPrimary()
	})

  await knex.schema.alterTable('katakana', (t) => {
		t.dropPrimary()
	})

	await knex.schema.alterTable('kanji', (t) => {
		t.dropPrimary()
	})
};

exports.down = function(knex) {
  
};
