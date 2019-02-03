/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  if (candidates.length === 0) {
    return []
  }
  
  let result = []

  function dfs(candidates, tempArr, remain, index) {
    if (remain < 0) {
      return
    } else if (remain === 0) {
      result.push(tempArr.slice(0))
      return
    }

    for (let i = index; i < candidates.length; i++) {
      tempArr.push(candidates[i])
      dfs(candidates, tempArr, remain - candidates[i], i)
      tempArr.pop()
    }
  }  

  dfs(candidates, [], target, 0)

  return result
};