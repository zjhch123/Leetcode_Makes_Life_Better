/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (nums === null || nums.length === 0) {
    return 0
  }

  const maxArr = [nums[0]]
  const minArr = [nums[0]]

  for (let i = 1; i < nums.length; i++) {
    maxArr.push(Math.max(nums[i], Math.max(nums[i] * maxArr[i - 1], nums[i] * minArr[i - 1])))
    minArr.push(Math.min(nums[i], Math.min(nums[i] * maxArr[i - 1], nums[i] * minArr[i - 1])))
  }

  return Math.max(...maxArr)
};