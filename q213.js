/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const size = nums.length

  if (size === 1) {
    return nums[0]
  }

  const calculator = (arr, start, end) => {
    const dp = Array(arr.length).fill(0)
    let max = 0
    for (let i = start; i <= end; i++) {
      if (i - start < 2) {
        dp[i] = i === start ? arr[start] : Math.max(dp[i - 1], arr[i])
      } else {
        dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 1])
      }

      max = Math.max(max, dp[i])
    }

    return max
  }

  return Math.max(calculator(nums, 0, size - 2), calculator(nums, 1, size - 1))
};