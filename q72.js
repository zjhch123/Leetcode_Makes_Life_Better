/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const create2DArray = (row, column, defaultValue) => Array(row).fill(1).map(_ => Array(column).fill(defaultValue))

  const l1 = word1.length
  const l2 = word2.length
  const dp = create2DArray(l1 + 1, l2 + 1, 0)

  for (let i = 0; i <= l1; i++) {
    dp[i][0] = i
  }

  for (let j = 0; j <= l2; j++) {
    dp[0][j] = j
  }

  for (let i = 1; i <= l1; i++) {
    for (let j = 1; j <= l2; j++) {
      let last1 = dp[i][j - 1] + 1
      let last2 = dp[i - 1][j] + 1
      let last3 = dp[i - 1][j - 1]
      if (word1[i - 1] !== word2[j - 1]) {
        last3 += 1
      }
      dp[i][j] = Math.min(last1, last2, last3)
    }
  }

  return dp[l1][l2]
};

console.log(minDistance("zoologicoarchaeologist", "zoogeologist"))