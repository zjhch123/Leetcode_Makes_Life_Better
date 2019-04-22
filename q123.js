/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 2) {
    return 0
  }

  const dp = Array(prices.length).fill(0)

  let minPrice = prices[0]
  let profit = 0
  let ans = 0
  
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i])
    profit = dp[i] = Math.max(profit, prices[i] - minPrice)
  }

  let maxPrice = prices[prices.length - 1]
  profit = 0

  for (let i = prices.length - 1; i >= 0; i--) {
    maxPrice = Math.max(maxPrice, prices[i])
    profit = Math.max(profit, maxPrice - prices[i])

    ans = Math.max(ans, i > 0 ? dp[i - 1] + profit : profit)
  }

  return ans
};