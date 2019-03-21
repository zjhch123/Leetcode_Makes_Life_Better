/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false
  }

  const create2DArray = (row, column, defaultValue) => new Array(row).fill(0).map(_ => new Array(column).fill(defaultValue))

  const row = s1.length + 1
  const column = s2.length + 1
  const dp = create2DArray(row, column, false)
  dp[0][0] = true

  for (let i = 1; i < row; i++) {
    if (s1[i - 1] === s3[i - 1]) {
      dp[i][0] = true
    } else {
      break
    }
  }

  for (let j = 1; j < column; j++) {
    if (s2[j - 1] === s3[j - 1]) {
      dp[0][j] = true
    } else {
      break
    }
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      if (dp[i][j - 1]) {
        dp[i][j] = s2[j - 1] === s3[i + j - 1]
        continue
      } 
      if (dp[i - 1][j]) {
        dp[i][j] = s1[i - 1] === s3[i + j - 1]
        continue
      }

      dp[i][j] = false
    }
  }

  return dp[row - 1][column - 1]
};

console.log(isInterleave('ab', 'bc', 'bbac'))