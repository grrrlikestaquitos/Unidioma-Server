const { readdir } = require('fs')

let characterCount = 0

function getSeedCharacters(language, characterSet, completion) {
    const path = __dirname + `/${language}/${characterSet}`
    let characterArray = []

	readdir(path, (err, files) => {
		files.forEach((fileName) => {
			const filePath = path + '/' + fileName
            const characters = getCharactersInFile(filePath)

            characters.forEach((charObj) => {
                characterArray.push(charObj)
            })
        })
        
        completion(characterArray)
    })
}

function getCharactersInFile(file) {
    const fileCharacters = require(file)

    return fileCharacters.map((character) => {
        const parsedCharacter = { id: characterCount, ...character }
        characterCount += 1
        return parsedCharacter
    })
}

module.exports = {
    getSeedCharacters: getSeedCharacters
}
