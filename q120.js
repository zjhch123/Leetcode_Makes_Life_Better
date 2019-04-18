/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  if (triangle.length === 0) {
    return 0
  }

  const dp = [[triangle[0][0]]]
  
  for (let i = 1; i < triangle.length; i++) {
    const row = triangle[i]
    const dpR = [dp[i - 1][0] + triangle[i][0]]

    for (let j = 1; j < row.length - 1; j++) {
      dpR.push(
        Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j]
      )
    }

    dpR.push(dp[i - 1][row.length - 2] + triangle[i][row.length - 1])

    dp.push(dpR)
  }

  return Math.min(...dp[triangle.length - 1])
};
