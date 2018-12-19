/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (!s) {
    return []
  }
  if (words.length === 0) {
    return []
  }

  const ret = []
  const l = words[0].length
  const wordsLength = l * words.length
  const wordsString = words.sort().toString()
  
  for (let i = 0; i < s.length - wordsLength + 1; i++) {
    if (findSub(s.slice(i, wordsLength + i), wordsString, l)) {
      ret.push(i)
    }
  }

  return ret
};

const findSub = (s, wordsString, l) => {
  const arr = []

  for (let i = 0; i < s.length; i += l) {
    arr.push(s.slice(i, i + l))
  }

  return arr.sort().toString() == wordsString
}