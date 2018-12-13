/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length == 0) {
    return []
  }
  
  return combine(digits)
};

const keys = {
  '0': ' ',
  '1': '*',
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz'
}

var combine = function(digits) {
  if (digits.length == 1) {
    return keys[digits].split('')
  }
  const ret = []
  const chrs = keys[digits[0]].split('')
  const prev = combine(digits.slice(1))

  for (let i = 0; i < chrs.length; i++) {
    for(let j = 0; j < prev.length; j++) {
      ret.push(chrs[i] + prev[j])
    }
  }

  return ret
}