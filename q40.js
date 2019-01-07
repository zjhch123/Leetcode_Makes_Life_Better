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

  const same = new Set()
  const ret = []
  function dfs(candidates, tempArr, remain, start) {
    if (remain < 0) {
      return
    } else if (remain === 0) {
      const t = tempArr.slice(0)
      const key = t.join('')
      if (same.has(key)) {
        return
      }
      ret.push(t)
      same.add(key)
      return
    } else {
      for (let i = start; i < candidates.length; i++) {
        tempArr.push(candidates[i])
        dfs(candidates, tempArr, remain - candidates[i], i + 1)
        tempArr.pop()
      }
    }
  }

  dfs(candidates, [], target, 0)

  return ret
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8))