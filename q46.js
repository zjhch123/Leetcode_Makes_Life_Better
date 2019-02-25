/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const ret = []

  if (nums.length === 1) {
    return [nums]
  }

  const backtracking = (arr) => {
    if (arr.size === nums.length) {
      ret.push(Array.from(arr))
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (arr.has(nums[i])) {
        continue
      }
      arr.add(nums[i])
      backtracking(arr)
      arr.delete(nums[i])
    }
  }
  
  backtracking(new Set())
  return ret
};

console.log(permute([1,2,3]))