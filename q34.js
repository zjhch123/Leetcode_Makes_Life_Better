/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  
  while((nums[left] !== target || nums[right] !== target) && left <= right) {
    if (nums[left] != target) {
      left += 1
    }
    if (nums[right] != target) {
      right -= 1
    }
  }

  if (left > right) {
    return [-1, -1]
  }

  return [left, right]
};

console.log(searchRange([5], 6))