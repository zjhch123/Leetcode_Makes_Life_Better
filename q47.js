/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const ret = []

  if (nums.length === 1) {
    return [nums]
  }

  const started = {}

  for (let i = 0; i < nums.length; i++) {
    const start = nums[i]

    if (started[start]) {
      continue
    }

    const res = permuteUnique([ ...nums.slice(0, i), ...nums.slice(i + 1) ])

    for (let j = 0; j < res.length; j++) {
      ret.push([start, ...res[j]])
    }
    
    started[start] = true
  }

  return ret
};

console.log(permuteUnique([1,1,2]))