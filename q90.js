/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  if (nums.length === 0) {
    return []
  }
  if (nums.length === 1) {
    return [nums, []]
  }

  nums = nums.sort((a, b) => a - b)
  const ret = []

  const backtracking = (ret, tempArr, nums, start, k) => {
    if (k === 0) {
      ret.push(tempArr.slice(0))
      return
    }

    for (let i = start; i < nums.length; i++) {
      if (i !== start && nums[i] === nums[i - 1]) continue
      tempArr.push(nums[i])
      backtracking(ret, tempArr, nums, i + 1, --k)
      tempArr.pop()
    }
    return
  }

  for (let i = 0; i <= nums.length; i++) {
    backtracking(ret, [], nums, 0, i)
  }

  return ret
}

console.log(subsetsWithDup([1,2,2]))