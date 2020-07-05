/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = new Map()
  const ignore = new Set()

  for (let i = 0; i < s.length; i += 1) {
    if (ignore.has(s[i])) {
      continue
    } else if (map.has(s[i])) {
      map.delete(s[i])
      ignore.add(s[i])
    } else {
      map.set(s[i], i)
    }
  }

  return map.size === 0 ? -1 : map.entries().next().value[1]
};

console.log(firstUniqChar('aaa'))