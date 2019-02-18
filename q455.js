/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  let gPtr = 0
  let sPtr = 0

  let ret = 0

  while (sPtr < s.length && gPtr < g.length) {
    if (s[sPtr] >= g[gPtr]) {
      gPtr += 1
      ret += 1
    }
    sPtr += 1
  }

  return ret
};