/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  if (candidates.length === 0) {
    return []
  }
  
  const result = []

  const backtracking = (arr = [], nowSum = 0, startIndex = 0) => {
    if (nowSum === target) {
      result.push(arr.slice(0))
      return
    } else if (nowSum > target) {
      return
    }

    for (let i = startIndex; i < candidates.length; i++) {
      arr.push(candidates[i])
      backtracking(arr, nowSum + candidates[i], i)
      arr.length -= 1
    }
  }

  backtracking()
  return result
};

console.log(combinationSum([2,3,6,7], 7))