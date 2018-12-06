/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let flag = 1
  let i = 0
  let number = 0

  const MAX = Math.pow(2, 31) - 1
  const MIN = Math.pow(-2, 31)

  str = str.trim()

  if (!str) return 0

  if (str[0] == '-') {
    flag = -1
    i++
  }
  if (str[0] == '+') {
    flag = 1
    i++
  }

  for (i; i < str.length; i++) {
    if (isNaN(str[i]) || str[i] == ' ') {
      break
    }
    number = number * 10 + str[i].charCodeAt() - 48
    if (flag * number > MAX) {
      return MAX
    }
    if (flag * number < MIN) {
      return MIN
    }
  }

  if (number == 0) {
    return 0
  }

  return flag * number
};
