exports.seed = async function(knex) {
    const table = 'katakana'
    await knex(table).del()
  
    // const characters = KatakanaCharacters.map((char, index) => ({ id: index, ...char }))
    // return await knex(table).insert(characters)
};