/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length === 0) {
    return 0
  }

  const sorted = nums.sort((a, b) => a - b)

  let cur = 1
  let maxLength = 0

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) {
      continue
    }
    if (sorted[i] - sorted[i - 1] === 1) {
      cur += 1
    } else {
      maxLength = Math.max(maxLength, cur)
      cur = 1
    }
  }

  return Math.max(maxLength, cur)
};