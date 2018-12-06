/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const MAX = Math.pow(2, 31) - 1
  const MIN = Math.pow(-2, 31)
  if (x > MAX || x < MIN) {
    return 0
  }

  let ret = 0
  while(x) {
    const num = x % 10
    x = (x - num) / 10
    ret = ret * 10 + num

    if (ret > MAX || ret < MIN) {
      return 0
    }
  }

  return ret
};
