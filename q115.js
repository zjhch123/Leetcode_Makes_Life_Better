/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  if (s === '' || s === null) {
    return 0 + (t === '' || t === null) ? 1 : 0
  }

  if (t === '' || t === null) {
    return 1
  }

  const create2DArray = (row, column, defaultValue) => Array(row).fill(0).map(_ => Array(column).fill(defaultValue))

  const row = s.length
  const column = t.length

  const dp = create2DArray(row, column, 0)

  dp[0][0] = s[0] === t[0] ? 1 : 0

  for (let i = 1; i < row; i++) {
    dp[i][0] = dp[i - 1][0] + ((s[i] === t[0]) ? 1 : 0)
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      if (j > i) {
        dp[i][j] = 0
        continue
      }

      dp[i][j] = s[i] === t[j] ? dp[i - 1][j] + dp[i - 1][j - 1] : dp[i - 1][j]
    }
  }

  return dp[row - 1][column - 1]
};

console.log(numDistinct("rabbbit", "rabbit"))