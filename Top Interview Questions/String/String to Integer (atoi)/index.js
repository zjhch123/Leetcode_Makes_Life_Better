/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const MIN = (-2) ** 31
  const MAX = 2 ** 31 - 1
  const trimmed = str.trim()

  const flag = trimmed[0] === '-' ? -1 : 1

  let i = (trimmed[0] === '-' || trimmed[0] === '+') ? 1 : 0
  let ret = 0

  while (i < trimmed.length) {
    if (trimmed[i] < '0' || trimmed[i] > '9') {
      break
    }

    ret = ret * 10 + trimmed[i++].charCodeAt() - 48

    if (ret > MAX) {
      return flag === 1 ? MAX : MIN
    }
  }

  return ret === 0 ? 0 : flag * ret
};
