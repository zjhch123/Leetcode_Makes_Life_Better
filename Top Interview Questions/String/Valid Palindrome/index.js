/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let i1 = 0, i2 = s.length - 1
  s = s.toLowerCase()

  const isValid = chr => (chr >= 'a' && chr <= 'z') || (chr >= '0' && chr <= '9')

  while (i1 < i2) {
    if (!isValid(s[i1])) {
      i1 += 1
      continue
    }
    if (!isValid(s[i2])) {
      i2 -= 1
      continue
    }
    if (s[i1] === s[i2]) {
      i1 += 1
      i2 -= 1
    } else {
      return false
    }
  }

  return true
};