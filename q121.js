/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 2) {
    return 0
  }

  let min = prices[0]
  let ret = 0

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i]
    if (price < min) {
      min = price
    } else {
      ret = Math.max(ret, price - min)
    }
  }

  return ret
};