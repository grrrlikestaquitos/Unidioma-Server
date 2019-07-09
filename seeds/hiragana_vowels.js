const HiraganaVowel = (id, character, romaji) => {
  return { id, character, romaji, type: 'v' }
}

exports.seed = function(knex) {
  const hiraganaVowels = knex('hiragana').insert([
    HiraganaVowel(0, 'あ', 'a'),
    HiraganaVowel(1, 'い', 'i'),
    HiraganaVowel(2, 'う', 'u'),
    HiraganaVowel(3, 'え', 'e'),
    HiraganaVowel(4, 'お', 'o')
  ]);

  return hiraganaVowels
};
