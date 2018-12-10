/**
 * @param {number} num
 * @return {string}
 */

const numbersMapping = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
}

const numbers = [
  1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000
]

var intToRoman = function(num) {
  let ret = ''

  let i = numbers.length - 1

  while (i >= 0) {
    if (num - numbers[i] < 0) {
      i--
      continue
    }
    if (num - numbers[i] > 0) {
      ret += numbersMapping[numbers[i]]
      num -= numbers[i]
    }
    if (num - numbers[i] == 0) {
      ret += numbersMapping[numbers[i]]
      num -= numbers[i]
      break
    }
  }

  return ret
};
