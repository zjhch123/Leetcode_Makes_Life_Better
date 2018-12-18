/**
 * 需要在函数中改变nums
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) {
    return 0
  }
  if (nums.length === 1) {
    return 1
  }
  let index = 1
  let prev = nums[0]
  while (index < nums.length) {
    if (nums[index] === prev) {
      nums.splice(index, 1)
    } else {
      prev = nums[index]
      index += 1
    }
  }
  return nums.length
};
