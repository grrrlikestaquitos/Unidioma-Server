const { getSeedCharacters } = require('../seed-files/util')

exports.seed = async function(knex) {
    const table = 'kanji'
    await knex(table).del()
	
		getSeedCharacters('japanese', 'kanji', async (kanjiCharacters) => {
			return await knex(table).insert(kanjiCharacters)
		})
}