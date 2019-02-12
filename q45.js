/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (nums.length < 2) {
    return 0
  }

  let left = 0
  let right = nums[0]
  let step = 1

  while (left <= right) {
    if (right >= nums.length - 1) {
      return step
    }

    let max = -1
    for (;left <= right; left++) {
      max = Math.max(max, left + nums[left]) // 找到当前以及下一步最远能跳到哪
    }

    if (max > right) {
      left = right
      right = max
      step += 1
    }
  }

  return -1
};