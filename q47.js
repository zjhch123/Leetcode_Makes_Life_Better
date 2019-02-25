/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const ret = []
  const visited = Array(nums.length).fill(false)

  if (nums.length === 1) {
    return [nums]
  }

  nums = nums.sort((a, b) => a - b)

  const backtracking = (arr, visited) => {
    if (arr.length === nums.length) {
      ret.push(arr.slice(0))
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) {
        continue
      }
      if (visited[i]) {
        continue
      }

      visited[i] = true
      arr.push(nums[i])
      backtracking(arr, visited)
      arr.length -= 1
      visited[i] = false
    }
  }

  backtracking([], visited)
  
  return ret
};

console.log(permuteUnique([1,2,1]))