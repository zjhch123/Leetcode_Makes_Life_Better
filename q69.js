/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x <= 1) {
    return x
  }
  
  let right = Math.floor(x / 2)
  let left = 2

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const number = mid ** 2
    if (number === x) {
      return mid
    } else if (number > x) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  

  return left - 1
};

console.log(mySqrt(17))