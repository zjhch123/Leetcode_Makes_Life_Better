/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  if (k === 0 || n === 0) {
    return []
  }

  const ret = []
  
  const backtracking = (startIndex = 1, arr = [], nowSum = 0) => {
    if (arr.length === k && nowSum === n) {
      ret.push(arr.slice(0))
      return
    }

    for (let i = startIndex; i < 10; i++) {
      arr.push(i)
      backtracking(i + 1, arr, nowSum + i)
      arr.length -= 1
    }
  }

  backtracking()
  return ret
};

console.log(combinationSum3(3, 7))