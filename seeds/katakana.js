const KatakanaVowel = (character, romaji) => ({ character, romaji, type: 'v' })
const KatakanaK = (character, romaji) => ({ character, romaji, type: 'k' })
const KatakanaS = (character, romaji) => ({ character, romaji, type: 's' })
const KatakanaT = (character, romaji) => ({ character, romaji, type: 's' })
const KatakanaN = (character, romaji) => ({ character, romaji, type: 'n' })
const KatakanaH = (character, romaji) => ({ character, romaji, type: 'h' })
const KatakanaM = (character, romaji) => ({ character, romaji, type: 'm' })
const KatakanaY = (character, romaji) => ({ character, romaji, type: 'y' })
const KatakanaR = (character, romaji) => ({ character, romaji, type: 'r' })
const KatakanaW = (character, romaji) => ({ character, romaji, type: 'w' })
const KatakanaEtc = (character, romaji) => ({ character, romaji, type: 'etc' })

const katakanaCharacters = [
  KatakanaVowel('ア', 'a'), KatakanaVowel('イ', 'i'), KatakanaVowel('ウ', 'u'), KatakanaVowel('エ', 'e'), KatakanaVowel('オ', 'o'),
  KatakanaK('カ', 'ka'), KatakanaK('キ', 'ki'), KatakanaK('ク', 'ku'), KatakanaK('ケ', 'ke'), KatakanaK('コ', 'ko'),
  KatakanaS('サ', 'sa'), KatakanaS('シ', 'shi'), KatakanaS('ス', 'su'), KatakanaS('セ', 'se'), KatakanaS('ソ', 'so'),
  KatakanaT('タ', 'ta'), KatakanaT('チ', 'chi'), KatakanaT('ツ', 'tsu'), KatakanaT('テ', 'te'), KatakanaT('ト', 'to'),
  KatakanaN('ナ', 'na'), KatakanaN('ニ', 'ni'), KatakanaN('ヌ', 'nu'), KatakanaN('ネ', 'ne'), KatakanaN('ノ', 'no'),
  KatakanaH('ハ', 'ha'), KatakanaH('ヒ', 'hi'), KatakanaH('フ', 'fu'), KatakanaH('ヘ', 'he'), KatakanaH('ホ', 'ho'),
  KatakanaM('マ', 'ma'), KatakanaM('ミ', 'mi'), KatakanaM('ム', 'mu'), KatakanaM('メ', 'me'), KatakanaM('モ', 'mo'),
  KatakanaY('ヤ', 'ya'), KatakanaY('ユ', 'yu'), KatakanaY('ヨ', 'yo'),
  KatakanaR('ラ', 'ra'), KatakanaR('リ', 'ri'), KatakanaR('ル', 'ru'), KatakanaR('レ', 're'), KatakanaR('ロ', 'ro'),
  KatakanaW('ワ', 'wa'), KatakanaW('ヲ', 'wo'),
  KatakanaEtc('ン', 'n')
]

exports.seed = async function(knex) {
  const table = 'katakana'
  await knex(table).del()

  const characters = katakanaCharacters.map((char, index) => ({ id: index, ...char }))
  return await knex(table).insert(characters)
};