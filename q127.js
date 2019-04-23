/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if (beginWord === endWord) {
    return 1
  }

  if (wordList.length === 0) {
    return 0
  }

  let indexes = []

  const getNextWords = (current) => {
    const ret = new Set()

    for (let i = 0; i < current.length; i++) {
      const entry = current.slice(0, i) + current.slice(i + 1)
      if (entry in indexes[i]) {
        for (const word of indexes[i][entry]) {
          if (word !== current) {
            ret.add(word)
          }
        }
      }
    }

    return ret
  }

  for (let i = 0; i < beginWord.length; i++) {
    const index = {}

    for (const word of wordList) {
      const entry = word.slice(0, i) + word.slice(i + 1)
      if (entry in index) {
        index[entry].push(word)
      } else {
        index[entry] = [word]
      }
    }

    indexes.push(index)
  }

  const queue = [beginWord]
  const distance = {[beginWord]: 1}

  while (queue.length !== 0) {
    const head = queue.shift()
    const nextWords = getNextWords(head)

    if (nextWords.has(endWord)) {
      return distance[head] + 1
    }

    nextWords.forEach(word => {
      if (word in distance) {
        return
      }
      queue.push(word)
      distance[word] = distance[head] + 1
    })
  }

  return 0
};