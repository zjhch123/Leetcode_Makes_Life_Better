/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) { return true }
  }
  return false
};