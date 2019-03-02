/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums === null || nums.length === 0) {
    return 0
  }

  let j = 2

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] === nums[j - 1] && nums[i] === nums[j - 2]) {
      continue
    } else {
      nums[j] = nums[i]
      j++
    }
  }

  return j
};