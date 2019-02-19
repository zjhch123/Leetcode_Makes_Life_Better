/**
 * dp[i][j] 表示以第 i 个数结尾的数组中是否有几项相加的和可以等于 j
 * dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]]
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const sum = nums.reduce((a, b) => a + b, 0)
  if (sum % 2 === 1) { return false }

  const create2DArray = (row, column, defaultValue) => Array(row).fill(0).map(_ => Array(column).fill(defaultValue))

  const size = nums.length
  const target = sum / 2
  const dp = create2DArray(size, target + 1, false)

  dp[0][0] = true

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= target; j++) {
      dp[i][j] = dp[i - 1][j] || (j >= nums[i] ? dp[i - 1][j - nums[i]] : false)
    }
  }

  return dp[size - 1][target]
};

console.log(canPartition([1,5,11,5]))