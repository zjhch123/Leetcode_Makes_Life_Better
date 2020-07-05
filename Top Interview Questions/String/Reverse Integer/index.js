/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const MAX = 2 ** 31 - 1
  const MIN = (-2) ** 31

  if (x > MAX || x < MIN) {
    return 0
  }

  let flag = x >= 0 ? 1 : -1
  let ret = 0
  x = Math.abs(x)

  while (x !== 0) {
    ret = ret * 10 + (x % 10)

    if (ret > MAX || ret < MIN) {
      return 0
    }

    x = Math.floor(x / 10)
  }
  
  return ret * flag
};

console.log(reverse(1534236469))