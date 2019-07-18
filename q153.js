/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums === null || nums.length === 0) {
    return 0
  }

  let [left, right] = [0, nums.length - 1];

  if (nums[left] < nums[right]) {
    return nums[0]
  }

  while (right - left > 1) {
    const mid = ~~((left + right) / 2)
    if (nums[left] > nums[mid]) {
      right = mid
    } else {
      left = mid
    }
  }

  return nums[right]
};
