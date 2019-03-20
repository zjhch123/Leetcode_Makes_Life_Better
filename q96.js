/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const cached = new Map()
  const dfs = (n) => {
    if (n <= 1) {
      return 1
    }
    if (cached.has(n)) {
      return cached.get(n)
    }
    let ret = 0
    for (let i = 1; i <= n; i++) {
      ret += dfs(i - 1) * dfs(n - i)
    }

    cached.set(n, ret)
    return ret
  }

  return dfs(n)
};

console.log(numTrees(10))