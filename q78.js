/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  if (nums === null || nums.length === 0) {
    return [[]]
  }

  const ret = []

  const dfs = (nums, startIndex) => {
    if (startIndex === nums.length - 1) {
      ret.push([nums[startIndex]], [])
      return
    }
    dfs(nums, startIndex + 1)

    const prefix = nums[startIndex]
    const iteratorCount = ret.length

    let start = 0

    while (start < iteratorCount) {
      const next = ret[start].slice(0)
      next.push(prefix)
      ret.push(next)
      start += 1
    }
  }

  dfs(nums, 0)

  return ret
};

console.log(subsets([]))