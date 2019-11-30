/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  const create2DArray = (row, column, defaultValue) => Array(row).fill(1).map(_ => Array(column).fill(defaultValue))
  
  const row = dungeon.length
  const column = dungeon[0].length

  const dp = create2DArray(row, column, 9999999)

  for (let i = row - 1; i >= 0; i--) {
    for (let j = column - 1; j >= 0; j--) {
      if (i === row - 1 && j === column - 1) {
        dp[i][j] = Math.max(0, -dungeon[i][j])
      } else if (i === row - 1) {
        dp[i][j] = Math.max(0, dp[i][j + 1] - dungeon[i][j])
      } else if (j === column - 1) {
        dp[i][j] = Math.max(0, dp[i + 1][j] - dungeon[i][j])
      } else {
        dp[i][j] = Math.max(0, Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j])
      }
    }
  }

  return dp[0][0] + 1
};

console.log(calculateMinimumHP([[-4,-1,6],[-8,-3,6],[5,0,8]]))