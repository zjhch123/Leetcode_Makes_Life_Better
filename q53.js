/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0]
  let nowMax = nums[0]
  for (let i = 1; i < nums.length; i++) {
    nowMax = Math.max(nums[i], nums[i] + nowMax)
    max = Math.max(nowMax, max)
  }

  return max
};