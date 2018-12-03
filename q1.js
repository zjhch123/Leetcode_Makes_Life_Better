/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const original = nums[i]
    const res = target - original
    if (typeof map[res] != 'undefined') {
      return [map[res], i]
    }
    map[original] = i
  }
  return []
};

console.log(twoSum([2, 1, 8, 4], 6))