/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  if (candidates.length === 0) {
    return []
  }
  
  candidates = candidates.sort((a, b) => a - b)

  const visited = Array(candidates.length).fill(false)
  const ret = []

  const backtracking = (arr = [], startIndex = 0, nowSum = 0) => {
    if (nowSum === target) {
      ret.push(arr.slice(0))
      return
    } else if (nowSum > target) {
      return
    }

    for (let i = startIndex; i < candidates.length; i++) {
      if (i > 0 && candidates[i] === candidates[i - 1] && !visited[i - 1]) {
        continue
      }
      if (visited[i]) {
        continue
      }

      visited[i] = true
      arr.push(candidates[i])
      backtracking(arr, i + 1, nowSum + candidates[i])
      arr.length -= 1
      visited[i] = false
    }
  }

  backtracking()
  return ret
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8))