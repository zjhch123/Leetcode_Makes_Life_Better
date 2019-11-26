/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let ret = 0
  for (let i = 1; Math.pow(5, i) <= n; i++) {
    ret += Math.floor(n / (Math.pow(5, i)))
  }
  return ret
};

console.log(trailingZeroes(532141235))