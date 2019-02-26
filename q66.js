/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let add = 1

  for (let i = digits.length - 1; i >= 0; i--) {
    let integer = digits[i]
    integer += add

    if (integer >= 10) {
      add = 1
      integer = integer - 10
    } else {
      add = 0
    }
    digits[i] = integer
  }

  if (add === 1) {
    digits.splice(0, 0, 1)
  }

  return digits
};

console.log(plusOne([9,9,9,9,9,9,9,9,9]))