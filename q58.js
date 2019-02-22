/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim()
  if (s.length === 0) {
    return 0
  }
  let i
  for (i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      break
    }
  }

  return s.length - i - 1
};