/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const keys = {
    '0': ' ',
    '1': '',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  }

  if (digits.length == 0) {
    return []
  }

  const ret = []

  const combine = (digits, str = [], index = 0) => {
    if (index === digits.length) {
      ret.push(str.join(''))
      return
    }

    const digit = digits[index]
    for (let i = 0; i < keys[digit].length; i++) {
      str.push(keys[digit][i])
      combine(digits, str, index + 1)
      str.length = str.length - 1
    }
  }

  combine(digits)
  return ret
};

console.log(letterCombinations('234'))