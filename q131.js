/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const ret = []

  if (s === null || s.length === 0) {
    return ret
  }

  const dfs = (cur = [], index = 0) => {
    if (index === s.length) {
      ret.push(cur.slice(0))
    }

    for (let i = index; i < s.length; i++) {
      const str = s.slice(index, i + 1)
      if (isValid(str)) {
        cur.push(str)
        dfs(cur, i + 1)
        cur.pop()
      }
    }
  }

  const isValid = (s) => {
    let start = 0, end = s.length - 1

    while (start < end) {
      if (s[start] !== s[end]) return false
      start++
      end--
    }

    return true
  }

  dfs()

  return ret
};

console.log(partition('aab'))