/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const create2DArray = (row, column, defaultValue) => Array(row).fill(1).map(_ => Array(column).fill(defaultValue))

  const row = obstacleGrid.length
  const column = obstacleGrid[0].length

  if ((row === 0 && column === 0) || obstacleGrid[0][0] === 1) {
    return 0
  }

  const dp = create2DArray(row, column, 0)
  for (let i = 0; i < row; i++) {
    if (obstacleGrid[i][0] === 1) {
      break
    }
    dp[i][0] = 1
  }

  for (let j = 0; j < column; j++) {
    if (obstacleGrid[0][j] === 1) {
      break
    }
    dp[0][j] = 1
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0
      } else if (obstacleGrid[i - 1][j] === 1) {
        dp[i][j] = dp[i][j - 1]
      } else if (obstacleGrid[i][j - 1] === 1) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }

  return dp[row - 1][column - 1]
};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,1,0],[1,0,0]]))