
exports.up = async function(knex) {
  await knex.schema.table('kanji', (t) => {
		t.renameColumn('hiragana', 'furigana')
	})
};

exports.down = async function(knex) {
	await knex.schema.table('kanji', (t) => {
		t.renameColumn('furigana', 'hiragana')
	})
};
