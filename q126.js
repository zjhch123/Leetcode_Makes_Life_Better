/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  if (beginWord === endWord) {
    return [beginWord]
  }
  if (wordList.length === 0) {
    return []
  }

  let indexes = null
  let distance = null
  let result = []

  const buildIndex = (length, dict) => {
    const indexes = []

    for (let i = 0; i < length; i++) {
      const index = {}

      for (let word of dict) {
        const entry = word.slice(0, i) + word.slice(i + 1)
        if (typeof index[entry] === 'undefined') {
          index[entry] = [word]
        } else {
          index[entry].push(word)
        }
      }

      indexes.push(index)
    }

    return indexes
  }

  const getNextWord = (word) => {
    const res = []
    
    for (let i = 0; i < word.length; i++) {
      const entry = word.slice(0, i) + word.slice(i + 1)
      if (entry in indexes[i]) {
        for (const nextWord of indexes[i][entry]) {
          if (nextWord !== word) {
            res.push(nextWord)
          }
        }
      }
    }

    return res
  }

  const bfs = (beginWord) => {
    distance = {}
    distance[beginWord] = 0
    const q = []
    q.push(beginWord)

    while (q.length !== 0) {
      let head = q.shift()
      const nextWords = getNextWord(head)

      for (const nextWord of nextWords) {
        if (nextWord in distance) {
          continue
        }

        distance[nextWord] = distance[head] + 1
        q.push(nextWord)
      }
    }
  }

  const dfs = (current, target, path) => {
    if (current === target) {
      result.push(path.slice(0))
      return
    }

    const nextWords = getNextWord(current)
    
    for (const nextWord of nextWords) {
      if (distance[nextWord] - 1 === distance[current]) {
        dfs(nextWord, target, [...path, nextWord])
      }
    }
  }

  indexes = buildIndex(beginWord.length, wordList)
  bfs(beginWord, endWord)
  dfs(beginWord, endWord, [beginWord])

  return result
};
