// A bad question since the official solution is wrong!
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {

  if (nums.length <= 1) {
    return 0
  }

  const first = nums[0]
  const last = nums.slice(-1)[0]

  if (first > nums[1]) {
    return 0
  }

  if (last > nums.slice(-2)[0]) {
    return nums.length - 1
  }

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return i
    }
  }

  return undefined
};