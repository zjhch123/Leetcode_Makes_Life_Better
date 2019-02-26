/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let rows = [[]]
  let nowRow = rows[0]
  let nowRowWordsSize = 0
  let nowRowWordsLength = 0

  const addRight = (rowIndex) => {
    let rowsJoined = rows[rowIndex].join('')
    let wordsRest = maxWidth - rowsJoined.length
    while (wordsRest > 0) {
      rowsJoined += ' '
      wordsRest -= 1
    }
    return rowsJoined
  }

  const addMiddle = (rowIndex) => {
    const nowRow = rows[rowIndex]
    const nowRowWordsLength = nowRow.join('').length
    const nowRowWordsSize = nowRow.length

    let restLength = maxWidth - nowRowWordsLength
    let index = 1
    while (restLength > 0) {
      nowRow[index] += ' '
      restLength -= 1
      index += 2
      if (index >= nowRowWordsSize) {
        index = 1
      }
    }
    return rows[rowIndex].join('')
  }

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    const wordLength = word.length
    const nowRowRestLength = maxWidth - nowRowWordsLength - nowRowWordsSize

    if (wordLength <= nowRowRestLength) {
      nowRowWordsSize += 1
      nowRowWordsLength += wordLength
    } else {
      nowRow = []
      rows.push(nowRow)
      nowRowWordsSize = 1
      nowRowWordsLength = wordLength
    }

    if (nowRowWordsSize > 1) {
      nowRow.push(' ')
    }
    nowRow.push(word)
  }

  for (let i = 0; i < rows.length; i++) {
    const nowRowWordsSize = rows[i].length

    if (nowRowWordsSize > 1 && i < rows.length - 1) {
      rows[i] = addMiddle(i)
    } else {
      rows[i] = addRight(i)
    }
  }

  return rows
};

console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16))