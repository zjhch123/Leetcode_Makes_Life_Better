/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const create2DArray = (row, column, defaultValue) => Array(row).fill(0).map(_ => Array(column).fill(defaultValue))

  const row = grid.length
  const column = grid[0].length
  const dp = create2DArray(row, column, 0)

  dp[0][0] = grid[0][0]

  for (let i = 1; i < row; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0]
  }

  for (let j = 1; j < column; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j]
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }

  return dp[row - 1][column - 1]
};

console.log(minPathSum([[1,2,5],[3,2,1]]))