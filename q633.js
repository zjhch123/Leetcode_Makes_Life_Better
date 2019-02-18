/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  let right = Math.floor(Math.sqrt(c) + 1)
  let left = 0

  while (left <= right) {
    const n = left ** 2 + right ** 2
    if (n === c) {
      return true
    } else if (n < c) {
      left += 1
    } else {
      right -= 1
    }
  }
  
  return false
};

