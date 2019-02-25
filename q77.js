/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const ret = []

  const backtracking = (arr, index = 0) => {
    if (arr.length === k) {
      ret.push(arr.slice(0))
      return
    }

    for (let i = index; i < n; i++) {
      arr.push(i + 1)
      backtracking(arr, i + 1)
      arr.length -= 1
    }
  }

  backtracking([])
  return ret
};

console.log(combine(4, 5))