/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (!nums || nums.length === 0) {
    return 0
  }

  let left = 0
  let right = nums.length
  while (right - left > 0) {
    const mid = Math.floor((right + left) / 2)
    if (nums[mid] > target) {
      right = mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      return mid
    }
  }

  return Math.floor((left + right) / 2)
};