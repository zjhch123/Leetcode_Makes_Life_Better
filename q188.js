/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  const n = prices.length
  if (k > n / 2) {
    let profit = 0
    for (let i = 0; i < prices.length - 1; i++) {
      if (prices[i + 1] - prices[i] > 0) {
        profit += prices[i + 1] - prices[i]
      }
    }
    return profit
  }

  const g = Array(k + 1).fill(0)
  const l = Array(k + 1).fill(0)

  for (let i = 0; i < n - 1; i++) {
    const diff = prices[i + 1] - prices[i]

    for (let j = k; j > 0; j--) {
      l[j] = Math.max(g[j - 1] + Math.max(diff, 0), l[j] + diff)
      g[j] = Math.max(g[j], l[j])
    }
  }

  return g[k]
};

console.log(maxProfit(2, [2,1,2,0,1]))