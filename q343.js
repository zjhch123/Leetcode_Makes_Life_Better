/**
 * dp[8] = 2*2*2*2 = dp[6] * 2
 * dp[9] = 2*2*3*2 = dp[7] * 2
 * dp[10] = 2*2*2*2*2 = dp[8] * 2
 * dp[11] = 2*2*2*2*3 = dp[9] * 2
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  const dp = Array(n + 1)
  dp[1] = 1
  dp[2] = 1
  dp[3] = 2
  dp[4] = 4
  dp[5] = 6
  dp[6] = 9
  dp[7] = 12
  for (let i = 8; i <= n; i++) {
    dp[i] = Math.max(2 * dp[i - 2], 3 * dp[i - 3])
  }
  return dp[n]
};

console.log(integerBreak(10))