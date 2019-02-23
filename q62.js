/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const create2DArray = (row, column, defaultValue) => Array(row).fill(1).map(_ => Array(column).fill(defaultValue))

  const dp = create2DArray(m, n, 1)

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
};