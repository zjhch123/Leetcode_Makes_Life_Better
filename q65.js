/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  const isSign = (str) => str === '+' || str === '-'
  const isDot = (str) => str === '.'
  const isDigit = (str) => str >= '0' && str <= '9'
  const isE = (str) => str === 'e'

  s = s.trim()
  let hasSign1 = false
  let hasDigit1 = false
  let hasDot = false
  let hasE = false
  let hasSign2 = false
  let hasDigit2 = false

  for (let i = 0; i < s.length; i++) {
    const str = s[i]
    if (isSign(str)) {
      if (hasE === false) {
        if (i !== 0) {
          return false
        }
        hasSign1 = true
      } else {
        if (hasSign2 === false && hasDigit2 === false) {
          hasSign2 = true
        } else {
          return false
        }
      }
    } else if (isDot(str)) {
      if (hasDot === true) {
        return false
      }
      if (hasE === true) {
        return false
      }
      hasDot = true
    } else if (isDigit(str)) {
      if (hasE === true) {
        hasDigit2 = true
      } else {
        hasDigit1 = true
      }
    } else if (isE(str)) {
      if (hasDigit1 === false) {
        return false
      }
      if (hasE === true) {
        return false
      }
      hasE = true
    } else {
      return false
    }
  }

  if (hasE && hasDigit2 === false) {
    return false
  }
  if (hasSign1 && hasDigit1 === false) {
    return false
  }

  return hasDigit1
};

console.log(isNumber('0'))
console.log(isNumber('0.1'))
console.log(isNumber('0..1'))
console.log(isNumber('0.1.1'))
console.log(isNumber('abc'))
console.log(isNumber('1 a'))
console.log(isNumber('2e10'))
console.log(isNumber('-90e3'))
console.log(isNumber('1e'))
console.log(isNumber('e3'))
console.log(isNumber('6e-1'))
console.log(isNumber('99e.25'))
console.log(isNumber('53.5e93'))
console.log(isNumber('--6'))
console.log(isNumber('-+6'))
console.log(isNumber('95a'))
