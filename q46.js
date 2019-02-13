/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const ret = []

  if (nums.length === 1) {
    return [nums]
  }

  for (let i = 0; i < nums.length; i++) {
    const start = nums[i]
    const res = permute([ ...nums.slice(0, i), ...nums.slice(i + 1) ])
    for (let j = 0; j < res.length; j++) {
      ret.push([start, ...res[j]])
    }
  }

  return ret
};