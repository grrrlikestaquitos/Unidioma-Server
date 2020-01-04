const HiraganaVowel = (character, romaji) => ({ character, romaji, type: 'v' })
const HiraganaK = (character, romaji) => ({ character, romaji, type: 'k' })
const HiraganaS = (character, romaji) => ({ character, romaji, type: 's' })
const HiraganaT = (character, romaji) => ({ character, romaji, type: 's' })
const HiraganaN = (character, romaji) => ({ character, romaji, type: 'n' })
const HiraganaH = (character, romaji) => ({ character, romaji, type: 'h' })
const HiraganaM = (character, romaji) => ({ character, romaji, type: 'm' })
const HiraganaY = (character, romaji) => ({ character, romaji, type: 'y' })
const HiraganaR = (character, romaji) => ({ character, romaji, type: 'r' })
const HiraganaW = (character, romaji) => ({ character, romaji, type: 'w' })
const HiraganaEtc = (character, romaji) => ({ character, romaji, type: 'etc' })

const hiraganaCharacters = [
  HiraganaVowel('あ', 'a'), HiraganaVowel('い', 'i'), HiraganaVowel('う', 'u'), HiraganaVowel('え', 'e'), HiraganaVowel('お', 'o'),
  HiraganaK('か', 'ka'), HiraganaK('き', 'ki'), HiraganaK('く', 'ku'), HiraganaK('け', 'ke'), HiraganaK('こ', 'ko'),
  HiraganaS('さ', 'sa'), HiraganaS('し', 'shi'), HiraganaS('す', 'su'), HiraganaS('せ', 'se'), HiraganaS('そ', 'so'),
  HiraganaT('た', 'ta'), HiraganaT('ち', 'chi'), HiraganaT('つ', 'tsu'), HiraganaT('て', 'te'), HiraganaT('と', 'to'),
  HiraganaN('な', 'na'), HiraganaN('に', 'ni'), HiraganaN('ぬ', 'nu'), HiraganaN('ね', 'ne'), HiraganaN('の', 'no'),
  HiraganaH('は', 'ha'), HiraganaH('ひ', 'hi'), HiraganaH('ふ', 'fu'), HiraganaH('へ', 'he'), HiraganaH('ほ', 'ho'),
  HiraganaM('ま', 'ma'), HiraganaM('み', 'mi'), HiraganaM('む', 'mu'), HiraganaM('め', 'me'), HiraganaM('も', 'mo'),
  HiraganaY('や', 'ya'), HiraganaY('ゆ', 'yu'), HiraganaY('よ', 'yo'),
  HiraganaR('ら', 'ra'), HiraganaR('り', 'ri'), HiraganaR('る', 'ru'), HiraganaR('れ', 're'), HiraganaR('ろ', 'ro'),
  HiraganaW('わ', 'wa'), HiraganaW('を', 'wo'),
  HiraganaEtc('ん', 'n')
]

exports.seed = async function(knex) {
  const table = 'hiragana'
  await knex(table).del()

  const characters = hiraganaCharacters.map((char, index) => ({ id: index, ...char }))
  return await knex(table).insert(characters)
}
