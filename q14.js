/**
 * @param {string[]} strs
 * @return {string}
 */

const getCommonPrefix = (s1, s2) => {
  const length = Math.min(s1.length, s2.length)
  let prefix = ''
  for (let i = 0; i < length; i++) {
    if (s1[i] == s2[i]) {
      prefix += s1[i]
    } else {
      break
    }
  }
  return prefix
}
 
var longestCommonPrefix = function(strs) {
  if (strs.length == 0) {
    return ''
  }
  if (strs.length == 1) {
    return strs[0]
  }
  if (strs.length == 2) {
    return getCommonPrefix(strs[0], strs[1])
  }

  const s1 = strs[0]
  const s2 = strs[1]
  let prefix = getCommonPrefix(s1, s2)

  for (let i = 2; i < strs.length; i++) {
    prefix = getCommonPrefix(prefix, strs[i])
  }

  return prefix
};