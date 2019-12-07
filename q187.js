/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  const map = new Map()
  for (let i = 0; i < s.length - 9; i++) {
    const sequence = s.slice(i, i + 10)
    if (map.has(sequence)) {
      map.set(sequence, map.get(sequence) + 1)
    } else {
      map.set(sequence, 1)
    }
  }

  const ret = []
  map.forEach((v, k) => v > 1 && ret.push(k))

  return ret
};

console.log(findRepeatedDnaSequences("AAAAAAAAAAAA"))