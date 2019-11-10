const kanji = (character, furigana, romaji, meaning, englishPhrase, japanesePhrase, romajiPhrase) => ({
    character, furigana, romaji, meaning, englishPhrase, japanesePhrase, romajiPhrase
})

module.exports = [
    kanji('私', 'わたし', 'wa-ta-shi', 'I; me', 'I fell', '私は落ちた', 'watashi wa ochita'),
    kanji('一', 'いち', 'i-chi', 'one', 'One person', '一人', 'hitori')
]