/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) {
      return 1
    }
    if (n === -1) {
      return 1 / x
    }
    if (n === 1) {
      return x
    }

    const ret = myPow(x, n >> 1)

    if (n % 2 === 0) {
      return ret * ret
    } else {
      return ret * ret * x
    }
};